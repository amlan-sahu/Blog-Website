// src/loadTinyMCE.js
export function loadTinyMCE() {
    const script = document.createElement('script');
    script.src = `https://cdn.tiny.cloud/1/${import.meta.env.VITE_TINYMCE_API_KEY}/tinymce/7/tinymce.min.js`;
    script.referrerPolicy = 'origin';
    document.head.appendChild(script);
  }
  