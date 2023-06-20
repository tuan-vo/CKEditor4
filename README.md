# CKEditor4

1. Library link:
```
    <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>
```
2. Create editor:
```
  <textarea id="editor"></textarea>
```
3. Create a data check button:
```
  <button onclick="f_getData()">get Data</button>
```
4. Javascript code:
```
  CKEDITOR.replace('editor', {
    toolbar: 'Basic',
    startupMode: 'wysiwyg' // Set the initial mode to visual mode (WYSIWYG)
  });

  function f_getData() {
      var editor = CKEDITOR.instances.editor;
      var editorData = editor.getData();
      console.log(editorData);
  }
```
