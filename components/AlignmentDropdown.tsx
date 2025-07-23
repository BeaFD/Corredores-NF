"use client";

import { useState, useEffect, useRef } from 'react';
import type { Editor } from '@tiptap/react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, ChevronDown } from 'lucide-react';

interface AlignmentDropdownProps {
  editor: Editor | null;
}

const alignmentOptions = [
  { value: 'left', icon: AlignLeft, label: 'Izquierda' },
  { value: 'center', icon: AlignCenter, label: 'Centrar' },
  { value: 'right', icon: AlignRight, label: 'Derecha' },
  { value: 'justify', icon: AlignJustify, label: 'Justificar' },
];

export default function AlignmentDropdown({ editor }: AlignmentDropdownProps) {
  if (!editor) return null;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleAlignmentChange = (alignment: string) => {
    editor.chain().focus().setTextAlign(alignment).run();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getActiveAlignmentIcon = () => {
    const activeOption = alignmentOptions.find(opt => editor.isActive({ textAlign: opt.value }));
    return activeOption ? activeOption.icon : AlignLeft; // Default to AlignLeft icon
  };

  const ActiveIcon = getActiveAlignmentIcon();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        title="Text Alignment"
        onClick={toggleDropdown}
        className="rounded px-3 py-3 hover:bg-gray-700 transition-colors min-w-[48px] h-[48px] flex items-center justify-center text-white" // Added text-white
      >
        <ActiveIcon size={18} />
        <ChevronDown size={16} className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-gray-700 rounded-md shadow-lg py-1 right-0 sm:left-0"> {/* Adjusted positioning for responsiveness */}
          {alignmentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => handleAlignmentChange(option.value)}
                className={`w-full flex items-center px-4 py-2 text-sm text-left transition-colors duration-150 ${editor.isActive({ textAlign: option.value }) ? 'bg-blue-600 text-white' : 'text-white hover:bg-gray-600'}`}
              >
                <Icon size={18} className="mr-3" /> {/* Increased margin */}
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}