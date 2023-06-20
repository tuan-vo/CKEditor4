CKEDITOR.replace('editor', {
    toolbar: 'Basic',
    startupMode: 'wysiwyg' // Set the initial mode to visual mode (WYSIWYG)
});

function f_getData() {
    var editor = CKEDITOR.instances.editor;
    var editorData = editor.getData();
    console.log(editorData);
}