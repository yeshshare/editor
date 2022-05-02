import 'grapesjs/dist/css/grapes.min.css';
import './plugins/grapesjs-preset-newsletter.css';
//clear
import './plugins/grapesjs-preset-webpage.css';
import './plugins/grapesjs-blocks-bootstrap4.css';
//import './plugins/grapesjs-plugin-filestack.css';
const grapesjs = require('grapesjs');
import { init, openNav } from "../../js/grapejs/template/lp";
//const lp = require('../../../public/js/lp');
// import dos arquivos javascript dos plugins
import pluginBlocks from './plugins/grapesjs-blocks-basic';
//import pluginNavBar from './plugins/grapesjs-navbar';
//import pluginExport from './plugins/grapesjs-plugin-export';
import tUIImageEditor from './plugins/grapesjs-tui-image-editor';
import plugincountdown from './plugins/grapesjs-component-countdown';
//import pluginBlocksFlexbox from './plugins/grapesjs-blocks-flexbox';
//import pluginLorySlider from './plugins/grapesjs-lory-slider';
//import pluginTooltip from './plugins/grapesjs-tooltip';
//import pluginTabs from './plugins/grapesjs-tabs';
//import pluginTyped from './plugins/grapesjs-typed';
//import pluginCustonCode from './plugins/grapesjs-custom-code';
//import pluginForms from './plugins/grapesjs-plugin-forms';
//import pluginStyleGradient from './plugins/grapesjs-style-gradient';
//import pluginStyleFilter from './plugins/grapesjs-style-filter';
//import pluginStyleBG from './plugins/grapesjs-style-filter';
//import pluginTouch from './plugins/grapesjs-touch';
//import pluginParserPostcss from './plugins/grapesjs-parser-postcss';
//import plugingIndexeddb from './plugins/grapesjs-indexeddb';
//import pluginFirestore from './plugins/grapesjs-firestore';
//import pluginPresetWebpage from './plugins/grapesjs-preset-webpage';
//import bootstrap4 from './plugins/grapesjs-blocks-bootstrap4';
//import PluginPresetNewsletter from './plugins/grapesjs-preset-newsletter';
//import pluginFilestack from './plugins/grapesjs-plugin-filestack';
//import Aviary from './plugins/grapesjs-aviary';
//import pluginPresetWebpage from './plugins/grapesjs-preset-webpage';


import "toastr/build/toastr.min.css"

const toastr = require('toastr');

let config = window.editorConfig;
delete window.editorConfig;


let remoteIcons = 'https://cdnjs.cloudflare.com/ajax/libs/tui-image-editor/3.15.0/svg/'

let plugins = [
    pluginBlocks,
    //pluginNavBar,
    plugincountdown,
    //pluginExport,
    //pluginBlocksFlexbox,
    //pluginLorySlider,
    //pluginTooltip,
    //pluginTabs,
    //pluginTyped,
    //pluginCustonCode,
    //pluginForms,
    //pluginStyleFilter,
    //pluginStyleBG,
    //pluginStyleGradient,
    //pluginTouch,
    //pluginParserPostcss,
    //plugingIndexeddb,
    //pluginFirestore,
    //bootstrap4,
    //pluginPresetWebpage,
    //PluginPresetNewsletter,
    //pluginFilestack,
    // bootstrap4,
]
let pluginsOpts = {
    'grapesjs-blocks-basic': {},
    //'gjs-navbar': {},
    'gjs-component-countdown': {},
    //'grapesjs-plugin-export': { addExportBtn: true },
    //'gjs-blocks-flexbox': {},
    //'grapesjs-lory-slider': {},
    //'grapesjs-tooltip': {},
    //'grapesjs-tabs': {},
    //'grapesjs-typed': {},
    //'grapesjs-custom-code': {},
    //'grapesjs-plugin-forms': {},
    //'grapesjs-style-filter': {},
    //'grapesjs-style-bg': {},
    /*
    'grapesjs-style-gradient': {
        colorPicker: 'default',
        grapickOpts: {
            min: 1,
            max: 99,
        }
    },
    'grapesjs-touch': {},
    'grapesjs-parser-postcss': {},
    'grapesjs-indexeddb': {},
    'grapesjs-firestore': {},
    /*
    'grapesjs-blocks-bootstrap4': {
        blocks: {},
        blockCategories: {},
        labels: {},
    },*/
    //'gjs-preset-webpage': {},
    //'grapesjs-preset-newsletter': {},
    //'grapesjs-plugin-filestack': {},
    //'grapesjs-aviary': { onApply: "284a26c74ed78be001cf6933aa6c33b694d92d8f" },
    // 
};



if (config.imageEditor) {
    plugins.push(tUIImageEditor)
    pluginsOpts[tUIImageEditor] = {
        config: {
            includeUI: {
                initMenu: 'filter',
            },
        },
        icons: {
            'menu.normalIcon.path': `${remoteIcons}icon-d.svg`,
            'menu.activeIcon.path': `${remoteIcons}icon-b.svg`,
            'menu.disabledIcon.path': `${remoteIcons}icon-a.svg`,
            'menu.hoverIcon.path': `${remoteIcons}icon-c.svg`,
            'submenu.normalIcon.path': `${remoteIcons}icon-d.svg`,
            'submenu.activeIcon.path': `${remoteIcons}icon-c.svg`,
        },
    }
}


/*
let canvas = {
    styles: [
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    ],
    scripts: [
        'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
    ],
}
*/

config.plugins = plugins;
config.pluginsOpts = pluginsOpts;
//config.canvas = canvas;






let editor = grapesjs.init(config);

if (config.exposeApi) {
    Object.defineProperty(window, 'gjsEditor', {
        value: editor
    })
}

let loader = document.getElementById('loader');

let showLoader = function() {
    if (loader) {
        loader.style.display = 'flex';
    }
}
let hideLoader = function() {
    if (loader) {
        loader.style.display = 'none';
    }
}
editor.addFontFamily = function(fontFamily, prepend) {
    prepend = prepend === true

    let styleManager = this.StyleManager;

    let fontProperty = styleManager.getProperty('typography', 'font-family');
    let list = fontProperty.get('list');

    if (prepend) {
        //list.unshift(fontFamily);
    } else {
        list.push(fontFamily);
    }

    fontProperty.set('list', list);
    styleManager.render();
}

editor.on('load', () => {
    hideLoader();
    const event = new Event('gjs_loaded');
    event.editor = editor;
    window.document.dispatchEvent(event);
    editor.addFontFamily({
        name: 'Unset',
        value: '',
    }, true);
    if (config.fonts && Array.isArray(config.fonts) && config.fonts.length) {
        config.fonts.forEach(font => {
            if (!font.value) {
                console.error('Invalid font', font)
                return;
            }
            editor.addFontFamily({
                name: font.name || font.value,
                value: font.value
            });
        })
    }
})

var pfx = editor.getConfig().stylePrefix;
var modal = editor.Modal;
var commands = editor.Commands;
var codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
var panels = editor.Panels;
var container = document.createElement('div');
var btnEdit = document.createElement('button');
codeViewer.set({
    codeName: 'htmlmixed',
    readOnly: 0,
    theme: 'hopscotch',
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true
});
btnEdit.innerHTML = 'Save';
btnEdit.style.float = 'right';
btnEdit.style.backgroundColor = '#090';
btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
btnEdit.onclick = function() {
    var code = codeViewer.editor.getValue();
    editor.DomComponents.getWrapper().set('content', '');
    editor.setComponents(code.trim());
    modal.close();
    toastr.success('Html Saved', 'Success');
};

commands.add('html-edit', {
    run: function(editor, sender) {
        sender && sender.set('active', 0);
        var viewer = codeViewer.editor;
        modal.setTitle('Edit code');
        if (!viewer) {
            let txtarea = document.createElement('textarea');
            container.appendChild(txtarea);
            container.appendChild(btnEdit);
            codeViewer.init(txtarea);
            viewer = codeViewer.editor;
        }
        var InnerHtml = editor.getHtml();
        var Css = editor.getCss();
        modal.setContent('');
        modal.setContent(container);
        codeViewer.setContent(InnerHtml + "<style>" + Css + '</style>');
        modal.open();
        viewer.refresh();
    }
});
panels.addButton('options', [{
    id: 'edit',
    className: 'fa fa-edit',
    command: 'html-edit',
    attributes: {
        title: 'Edit code.'
    }
}]);
panels.addButton('options', [{
    id: 'upload-file',
    className: 'fa fa-upload',
    command(editor) {
        modal.setTitle('Upload File');
        modal.backdrop = false;
        let uploadFileContainer = document.createElement('div');
        uploadFileContainer.style.position = 'relative';
        uploadFileContainer.style.overflow = 'hidden';
        let uploadedLink = document.createElement('input');
        uploadedLink.type = 'text';
        uploadedLink.style.width = "100%";
        uploadedLink.readOnly = 'readonly';
        let loader = document.createElement('div');
        loader.style.display = 'none';
        loader.style.alignItems = 'center';
        loader.style.justifyContent = 'center';
        loader.style.width = '100%';
        loader.style.position = 'absolute';
        loader.style.top = '0';
        loader.style.left = '0';
        loader.style.height = '100%';
        loader.style.zIndex = '100';
        loader.style.backgroundColor = '#727272e0';
        loader.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
        uploadFileContainer.append(loader);
        let input = document.createElement('input');
        input.type = "file";
        input.style.width = '100%';
        input.onchange = (event) => {
            if (event.target.files[0] == undefined) { return; }
            loader.style.display = 'flex';
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            uploadFileContainer.disabled = 'true';
            fetch('/media', {
                    method: "POST",
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: formData
                })
                .then(resp => resp.json())
                .then(data => {
                    event.target.value = "";
                    loader.style.display = 'none';
                    if (data.errors) {
                        throw data.message;
                    }
                    uploadedLink.value = data.media_url;
                    toastr.success('FIle uploaded and Link Ready', 'Success')
                })
                .catch(error => {
                    loader.style.display = 'none';
                    toastr.error(error, 'Error');
                });
        }
        uploadFileContainer.append(input);
        uploadFileContainer.append(uploadedLink);
        modal.setContent(uploadFileContainer);
        modal.open();
    },
    attributes: {
        title: 'Upload a file and get its url.'
    }
}]);
panels.addButton('options', [{
    id: 'save',
    className: 'fa fa-save',
    command(editor) {
        showLoader();
        editor.store(res => {
            hideLoader();
            toastr.success('Page Saved', 'Success');
        });
    },
    attributes: {
        title: 'Save'
    }
}]);
panels.addButton('options', [{
    id: 'informacoes',
    className: 'fa fa-refresh',
    command(editor) {
        //console.log(lp);
        init();
        //alert("DEU CERTO MARCÃO");
        //showLoader();
        //editor.store(res => {
        //hideLoader();
        //toastr.success('Page Saved', 'Success');
        //});
    },
    attributes: {
        title: 'Carregar informações'
    }
}]);
panels.addButton('options', [{
    id: 'limpar',
    className: 'fa fa-trash',
    command(editor) {
        console.log(editor);
        editor.Components.clear();
        //alert("DEU CERTO MARCÃO");
        //showLoader();
        //editor.store(res => {
        //hideLoader();
        //toastr.success('Page Saved', 'Success');
        //});
    },
    attributes: {
        title: 'Carregar informações'
    }
}]);
panels.addButton('options', [{
    id: 'cancel',
    className: 'fa fa-arrow-left',
    command(editor) {
        window.history.back()
    },
    attributes: {
        title: 'Go back'
    }
}]);

let blockManager = editor.BlockManager;
blockManager.add("iframe", {
    category: 'Basic',
    label: "iframe",
    type: "iframe",
    content: "<iframe> </iframe>",
    selectable: true,
    attributes: { class: 'fa fa-file' },
});
editor.DomComponents.addType("iframe", {
    isComponent: el => el.tagName === "IFRAME",
    model: {
        defaults: {
            type: "iframe",
            attributes: {
                style: "width: 100px;height: 100px;background-color: white;",
            },
            traits: [{
                type: "text",
                label: "src",
                name: "src",
                id: "conteudo"
            }, {
                type: "text",
                label: "style",
                name: "style",
                id: "style"
            }]
        }
    }
});
if (config.templatesUrl) {
    fetch(config.templatesUrl)
        .then(resp => resp.json())
        .then(data => {
            let idUsados = [];
            data.forEach(block => {
                //console.log(block);
                //console.log(block['atributes']);
                //block.attributes = { class: 'fa fa-text' };
                //blockManager.add('block-' + block.id, block, );
                if (!idUsados.includes(block.id)) {
                    blockManager.add(block.name, {
                        id: block.id,
                        category: 'Blocks PAPO',
                        label: block.label,
                        type: "section",
                        content: block.content,
                        selectable: true,
                        attributes: { class: block.class },
                    })
                    idUsados.push(block.id);
                }
            });
        })
        .catch(error => {
            console.log(error);
        })
};

// let blockManager = editor.BlockManager;
/*
blockManager.add("NAVBAR", {
    category: 'Blocks PAPO',
    label: "Navbar",
    type: "section",
    content: "<section><div>TESTE</div></section>",
    selectable: true,
    attributes: { class: 'fa fa-bars' },
});*/