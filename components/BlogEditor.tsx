"use client";

import { useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import BaseLink from "@tiptap/extension-link"; // Renamed to BaseLink to avoid conflict with our CustomLink
import { 
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, 
  List, ListOrdered, Quote, Type, 
  Heading1, Heading2, Heading3, 
  Minus, Undo2, Redo2, Highlighter, Palette,
  Image as ImageIcon, Link2, Square
} from "lucide-react";
import AlignmentDropdown from './AlignmentDropdown';

// Extend Link mark to include 'class' attribute
const CustomLink = BaseLink.extend({
  inclusive: false,
  addAttributes() {
    return {
      ...this.parent?.(), // Inherit parent attributes (href, target, etc.)
      class: { // Add our custom 'class' attribute
        default: null,
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          if (attributes.class) {
            return { class: attributes.class };
          }
          return {};
        },
      },
    };
  },
});


function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addStyledLink = () => {
    const currentSelection = editor.state.selection;
    const selectedText = currentSelection.empty 
      ? '' 
      : editor.state.doc.textBetween(currentSelection.from, currentSelection.to, ' ');

    const url = window.prompt('Enter URL:', editor.getAttributes('link').href || '');
    if (!url) return;

    let linkText = selectedText;
    if (currentSelection.empty) {
      linkText = window.prompt('Enter link text (optional, URL will be used if empty):', url) || url;
    }
    
    const command = editor.chain().focus();
    if (currentSelection.empty) {
      // Insert new text and mark it as a link
      command.insertContent({
        type: 'text',
        text: linkText,
        marks: [
          { type: 'link', attrs: { href: url, class: 'custom-editor-hyperlink', target: '_blank' } }
        ]
      });
    } else {
      // Apply link to existing selection
      command.extendMarkRange('link').setLink({ href: url, class: 'custom-editor-hyperlink', target: '_blank' });
    }
    command.run();
  };

  const addCustomButton = () => {
    const buttonText = window.prompt('Enter button text:');
    if (!buttonText) return;
    const url = window.prompt('Enter button link URL:');
    if (!url) return;

    editor.chain().focus().insertContent({
      type: 'text',
      text: buttonText,
      marks: [
        { type: 'link', attrs: { href: url, class: 'custom-editor-button', target: '_blank' } }
      ]
    }).run();
  };
  
  const buttonClass = "rounded px-3 py-2 transition-colors min-w-[44px] h-[40px] flex items-center justify-center"; // Adjusted size
  const iconSize = 16; // Adjusted size

  return (
    <div className="flex flex-wrap gap-2 mb-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm items-center">
      <div className="flex gap-2">
        <button title="Negrita" onClick={() => editor.chain().focus().toggleBold().run()} className={`${buttonClass} font-bold ${editor.isActive('bold') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Bold size={iconSize} /></button>
        <button title="Cursiva" onClick={() => editor.chain().focus().toggleItalic().run()} className={`${buttonClass} ${editor.isActive('italic') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Italic size={iconSize} /></button>
        <button title="Subrayado" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`${buttonClass} ${editor.isActive('underline') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><UnderlineIcon size={iconSize} /></button>
        <button title="Tachado" onClick={() => editor.chain().focus().toggleStrike().run()} className={`${buttonClass} ${editor.isActive('strike') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Strikethrough size={iconSize} /></button>
      </div>
      
      <div className="w-px h-6 bg-gray-600 mx-2"></div> {/* Adjusted height */}
      
      <div className="flex gap-2">
        <button title="Lista" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`${buttonClass} ${editor.isActive('bulletList') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><List size={iconSize} /></button>
        <button title="Lista ordenada" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`${buttonClass} ${editor.isActive('orderedList') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><ListOrdered size={iconSize} /></button>
        <button title="Cita" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`${buttonClass} ${editor.isActive('blockquote') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Quote size={iconSize} /></button>
      </div>
      
      <div className="w-px h-6 bg-gray-600 mx-2"></div> {/* Adjusted height */}
      
      <div className="flex gap-2">
        <button title="H1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`${buttonClass} ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Heading1 size={iconSize} /></button>
        <button title="H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`${buttonClass} ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Heading2 size={iconSize} /></button>
        <button title="H3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`${buttonClass} ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Heading3 size={iconSize} /></button>
        <button title="Párrafo" onClick={() => editor.chain().focus().setParagraph().run()} className={`${buttonClass} ${editor.isActive('paragraph') ? 'bg-blue-600 text-white shadow' : 'hover:bg-gray-700'}`}><Type size={iconSize} /></button>
      </div>
      
      <div className="w-px h-6 bg-gray-600 mx-2"></div> {/* Adjusted height */}
      
      <div className="flex gap-2">
        <button title="Insertar Imagen" onClick={addImage} className={`${buttonClass} hover:bg-gray-700`}><ImageIcon size={iconSize} /></button>
        <button title="Insertar Enlace" onClick={addStyledLink} className={`${buttonClass} hover:bg-gray-700`}><Link2 size={iconSize} /></button>
        <button title="Insertar Botón" onClick={addCustomButton} className={`${buttonClass} hover:bg-gray-700`}><Square size={iconSize} /></button>
      </div>

      <div className="w-px h-6 bg-gray-600 mx-2"></div> {/* Adjusted height */}
      
      <div className="flex gap-2">
        <button title="Resaltar" onClick={() => editor.chain().focus().toggleHighlight().run()} className={`${buttonClass} ${editor.isActive('highlight') ? 'bg-yellow-600 text-white shadow' : 'hover:bg-gray-700'}`}><Highlighter size={iconSize} /></button>
        <label title="Color" className={`${buttonClass} hover:bg-gray-700 cursor-pointer`}>
          <Palette size={iconSize} />
          <input
            type="color"
            value={editor.getAttributes('textStyle').color || '#000000'}
            onChange={e => editor.chain().focus().setColor(e.target.value).run()}
            className="w-5 h-5 ml-1 border-none bg-transparent cursor-pointer rounded" // Adjusted size
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
          />
        </label>
      </div>
      
      <div className="w-px h-6 bg-gray-600 mx-2"></div> {/* Adjusted height */}
      
      <div className="flex gap-2">
        <button title="Separador" onClick={() => editor.chain().focus().setHorizontalRule().run()} className={`${buttonClass} hover:bg-gray-700`}><Minus size={iconSize} /></button>
        <button title="Deshacer" onClick={() => editor.chain().focus().undo().run()} className={`${buttonClass} hover:bg-gray-700`}><Undo2 size={iconSize} /></button>
        <button title="Rehacer" onClick={() => editor.chain().focus().redo().run()} className={`${buttonClass} hover:bg-gray-700`}><Redo2 size={iconSize} /></button>
      </div>

      <div className="w-px h-6 bg-gray-600 mx-2"></div> {/* Adjusted height */}
      
      <AlignmentDropdown editor={editor} />
    </div>
  );
}

export default function BlogEditor() {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const commonEditorPropsClass = 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none';
  const commonEditorPropsStyle = 'font-family: "Josefin Sans", sans-serif !important;';

  const extensions = [
    StarterKit.configure({
      heading: { levels: [1, 2, 3] },
      // link: false, // This line was causing the error and is removed
    }),
    Underline,
    TextStyle,
    Color,
    Highlight.configure({ multicolor: true }),
    FontFamily,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ImageExtension,
    CustomLink.configure({ // Use CustomLink
      openOnClick: true,
      autolink: true,
      HTMLAttributes: { // Default attributes for links created by CustomLink
        target: '_blank',
        rel: 'noopener noreferrer',
        // 'class' will be handled by the attrs in setLink or insertContent
      },
    }),
  ];

  const titleEditor = useEditor({
    extensions: [
      ...extensions.filter(ext => ext.name !== 'image' && ext.name !== 'link'), // Exclude Image and Link for title
      Placeholder.configure({ placeholder: 'Título del post...' }),
      // Add a very basic link if needed for title, or disallow links entirely
    ],
    content: '',
    editorProps: { 
      attributes: { 
        class: `min-h-[2.5em] text-2xl font-bold ${commonEditorPropsClass}`,
        style: commonEditorPropsStyle,
      } 
    },
  });
  
  const summaryEditor = useEditor({
    extensions: [
      ...extensions.filter(ext => ext.name !== 'image'), // Exclude Image for summary
      Placeholder.configure({ placeholder: 'Resumen del post...' }),
    ],
    content: '',
    editorProps: { 
      attributes: { 
        class: `min-h-[2em] ${commonEditorPropsClass}`,
        style: commonEditorPropsStyle,
      } 
    },
  });
  
  const bodyEditor = useEditor({
    extensions: [
      ...extensions,
      Placeholder.configure({ placeholder: 'Cuerpo del post...' }),
    ],
    content: '',
    editorProps: { 
      attributes: { 
        class: `min-h-[10em] ${commonEditorPropsClass}`,
        style: commonEditorPropsStyle,
      } 
    },
  });

// ... (handleThumbnailChange and handleSave methods remain the same) ...
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onload = ev => setThumbnail(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const postData = {
      title: titleEditor?.getHTML(),
      summary: summaryEditor?.getHTML(),
      body: bodyEditor?.getHTML(),
      thumbnail: thumbnail,
    };
    let finalThumbnailUrl = thumbnail;
    if (thumbnailFile) {
      const formData = new FormData();
      formData.append('file', thumbnailFile);
      try {
        const res = await fetch('/api/upload-thumbnail', { method: 'POST', body: formData });
        if (res.ok) {
          const data = await res.json();
          finalThumbnailUrl = data.url;
        } else {
          console.error("Thumbnail upload failed:", await res.text());
        }
      } catch (error) {
        console.error("Error uploading thumbnail:", error);
      }
    }
    try {
      await fetch("/api/save-post", {
        method: "POST",
        body: JSON.stringify({ ...postData, thumbnail: finalThumbnailUrl }),
        headers: { "Content-Type": "application/json" },
      });
      const toast = document.createElement('div');
      toast.textContent = '¡Post guardado!';
      toast.className = 'fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1800);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800" style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
      <main className="flex-1 flex flex-col">
        <div className="w-full max-w-[95vw] mx-auto p-8">
          <h1 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">Crear Nuevo Post</h1>
          
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <label htmlFor="title-editor" className="block mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">Título</label>
            <Toolbar editor={titleEditor} />
            <div id="title-editor" className="mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-white shadow-sm p-3">
              <EditorContent editor={titleEditor} />
            </div>
          </div>

          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <label htmlFor="summary-editor" className="block mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">Resumen</label>
            <Toolbar editor={summaryEditor} />
            <div id="summary-editor" className="mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-white shadow-sm p-3">
              <EditorContent editor={summaryEditor} />
            </div>
          </div>

          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <label htmlFor="thumbnail-upload" className="block mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">Miniatura</label>
            <input id="thumbnail-upload" type="file" accept="image/*" onChange={handleThumbnailChange} className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 dark:file:bg-gray-700 dark:file:text-gray-300 dark:hover:file:bg-gray-600 transition-colors" />
            {thumbnail && <img src={thumbnail} alt="Miniatura Preview" className="mt-4 max-h-60 rounded-lg shadow-md border dark:border-gray-600" />}
          </div>

          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <label htmlFor="body-editor" className="block mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">Cuerpo del Post</label>
            <Toolbar editor={bodyEditor} />
            <div id="body-editor" className="mt-1 rounded-md border border-grays                             -300 dark:border-gray-600 bg-white dark:bg-white shadow-sm p-3">
              <EditorContent editor={bodyEditor} />
            </div>
          </div>
          
          <button
            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-xl hover:from-blue-700 hover:to-blue-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={handleSave}
          >
            Guardar Post
          </button>
        </div>
      </main>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
        
        html, body { 
          font-family: 'Josefin Sans', sans-serif; 
          scroll-behavior: smooth;
        }
        
        .ProseMirror {
          font-family: 'Josefin Sans', sans-serif !important;
          min-height: 1em;
        }
        .ProseMirror:focus {
          outline: none;
        }

        .bg-white .ProseMirror { color: #1f2937; }
        .dark .dark\\:bg-gray-800 .ProseMirror { color: #f3f4f6; }


        .ProseMirror h1 {
          font-size: 2.5em !important; font-weight: 700 !important;
          margin-top: 1em !important; margin-bottom: 0.5em !important;
        }
        .ProseMirror h2 {
          font-size: 2em !important; font-weight: 600 !important;
          margin-top: 0.8em !important; margin-bottom: 0.4em !important;
        }
        .ProseMirror h3 {
          font-size: 1.75em !important; font-weight: 600 !important;
          margin-top: 0.7em !important; margin-bottom: 0.3em !important;
        }
        
        .ProseMirror p, .ProseMirror div, .ProseMirror span, .ProseMirror li {
          font-family: 'Josefin Sans', sans-serif !important;
          line-height: 1.6;
        }
        
        .ProseMirror ul, .ProseMirror ol {
          font-family: 'Josefin Sans', sans-serif !important;
          padding-left: 1.5em; margin-top: 0.5em; margin-bottom: 0.5em;
        }
        .ProseMirror ul { list-style-type: disc !important; }
        .ProseMirror ol { list-style-type: decimal !important; }
        
        .ProseMirror ul li::marker,
        .ProseMirror ol li::marker {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
          color: inherit !important; 
        }
        
        .ProseMirror blockquote {
          font-family: 'Josefin Sans', sans-serif !important;
          border-left: 4px solid #9ca3af; padding-left: 1rem;
          margin-left: 0; margin-top: 1em; margin-bottom: 1em;
          font-style: italic; color: #4b5563;
        }
        .dark .ProseMirror blockquote {
          border-left-color: #6b7280; color: #d1d5db;
        }

        /* Custom Editor Hyperlink */
        .custom-editor-hyperlink {
          color: #2563eb !important; /* blue-600 */
          text-decoration: underline !important;
          font-weight: bold !important;
        }
        .custom-editor-hyperlink:hover {
          color: #1d4ed8 !important; /* blue-700 */
        }

        /* Custom Editor Button */
        .custom-editor-button {
          display: inline-block;
          padding: 0.5em 1em;
          background-color: #3b82f6; /* blue-500 */
          color: white !important;
          text-decoration: none !important;
          border-radius: 0.375rem; /* rounded-md */
          font-weight: 600; /* semibold */
          transition: background-color 0.2s ease-in-out;
          margin: 0.25em; 
        }
        .custom-editor-button:hover {
          background-color: #2563eb; /* blue-600 */
        }
        
        .animate-fade-in-out { animation: fadeInOut 1.8s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
        input[type="color"]::-webkit-color-swatch { border: 1px solid #ccc; border-radius: 4px; }
        input[type="color"]::-moz-color-swatch { border: 1px solid #ccc; border-radius: 4px; }
      `}</style>
    </div>
  );
}