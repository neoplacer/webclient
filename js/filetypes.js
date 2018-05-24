var ext = {};
var extensions = {
    'threed': [['3ds', '3dm', 'max', 'obj'], '3D'],
    'aftereffects': [['aep', 'aet'], 'Adobe Aftereffects'],
    'audio': [['mp3', 'wav', '3ga', 'aif', 'aiff', 'flac', 'iff', 'm4a', 'wma'], 'Audio'],
    'cad': [['dxf', 'dwg'], 'CAD'],
    'compressed': [['zip', 'rar', 'tgz', 'gz', 'bz2', 'tbz', 'tar', '7z', 'sitx'], 'Compressed'],
    'dmg': [['dmg'], 'Disk Image'],
    'excel': [['xls', 'xlsx', 'xlt', 'xltm'], 'Excel'],
    'executable': [['exe', 'com', 'bin', 'apk', 'app', 'msi', 'cmd', 'gadget'], 'Executable'],
    'font': [['fnt', 'otf', 'ttf', 'fon'], 'Font'],
    'generic': [['*'], 'File'],
    'illustrator': [['ai', 'ait'], 'Adobe Illustrator'],
    'image': [['gif', 'tiff', 'tif', 'bmp', 'png', 'tga', 'jpg', 'jpeg', 'heic'], 'Image'],
    'indesign': [['indd'], 'Adobe InDesign'],
    'keynote': [['key'], 'Apple Keynote'],
    'numbers': [['numbers'], 'Apple Numbers'],
    'openoffice': [['sxw', 'stw', 'sxc', 'stc', 'sxi', 'sti', 'sxd', 'std', 'sxm'], 'OpenOffice'],
    'pages': [['pages'], 'Apple Pages'],
    'pdf': [['pdf'], 'PDF'],
    'photoshop': [['abr', 'psb', 'psd'], 'Adobe Photoshop'],
    'powerpoint': [['pps', 'ppt', 'pptx'], 'Powerpoint'],
    'premiere': [['prproj', 'ppj'], 'Adobe Premiere'],
    'raw': [['3fr', 'arw', 'bay', 'cr2', 'dcr', 'dng', 'fff', 'mef', 'mrw', 'nef', 'pef', 'rw2', 'srf', 'orf', 'rwl'], 'RAW'],
    'sketch': [['sketch'], 'Sketch'],
    'spreadsheet': [['ods', 'ots', 'gsheet', 'nb', 'xlr'], 'Spreadsheet'],
    'torrent': [['torrent'], 'Torrent'],
    'text': [['txt', 'rtf', 'ans', 'ascii', 'log', 'odt', 'wpd'], 'Text', 'pages'],
    'vector': [['svgz', 'svg', 'cdr', 'eps'], 'Vector'],
    'video': [['mkv', 'webm', 'avi', 'mp4', 'm4v', 'mpg', 'mpeg', 'mov', '3g2', '3gp', 'asf', 'wmv', 'vob'], 'Video'],
    'web-data': [['html', 'xml', 'shtml', 'dhtml', 'js', 'css', 'jar', 'java', 'class'], 'Web Client Code'],
    'web-lang': [['php', 'php3', 'php4', 'php5', 'phtml', 'inc', 'asp', 'pl', 'cgi', 'py', 'sql',
        'accdb','db','dbf','mdb','pdb'], 'Web Server Code'],
    'word': [['doc', 'docx', 'dotx', 'wps'], 'MS Word']
};

var extdesc = {
    '3ds': '3D Scene',
    '3dm': '3D Model',
    '3fr': 'RAW Image',
    '3g2': 'Multimedia',
    '3gp': '3D Model',
    '7z': '7-Zip Compressed',
    'accdb': 'Database',
    'aep': 'After Effects',
    'aet': 'After Effects',
    'ai': 'Illustrator',
    'aif': 'Audio Interchange',
    'aiff': 'Audio Interchange',
    'ait': 'Illustrator',
    'ans': 'ANSI Text File',
    'apk': 'Android App',
    'app': 'Mac OSX App',
    'arw': 'RAW Image',
    'as': 'ActionScript',
    'asc': 'ActionScript Com',
    'ascii': 'ASCII Text',
    'asf': 'Streaming Video',
    'asp': 'Active Server',
    'aspx': 'Active Server',
    'asx': 'Advanced Stream',
    'avi': 'A/V Interleave',
    'bat': 'DOS Batch',
    'bay': 'Casio RAW Image',
    'bmp': 'Bitmap Image',
    'bz2': 'UNIX Compressed',
    'c': 'C/C++ Source Code',
    'cc': 'C++ Source Code',
    'cdr': 'CorelDRAW Image',
    'cgi': 'CGI Script',
    'class': 'Java Class',
    'com': 'DOS Command',
    'cpp': 'C++ Source Code',
    'cr2': 'Raw Image',
    'css': 'CSS Style Sheet',
    'cxx': 'C++ Source Code',
    'dcr': 'RAW Image',
    'db': 'Database',
    'dbf': 'Database',
    'dhtml': 'Dynamic HTML',
    'dll': 'Dynamic Link Library',
    'dng': 'Digital Negative',
    'dmg': 'Mac OS disk Image',
    'doc': 'MS Word',
    'docx': 'MS Word',
    'dotx': 'MS Word Template',
    'dwg': 'Drawing DB File',
    'dwt': 'Dreamweaver',
    'dxf': 'DXF Image',
    'eps': 'EPS Image',
    'exe': 'Executable',
    'fff': 'RAW Image',
    'fla': 'Adobe Flash',
    'flac': 'Lossless Audio',
    'flv': 'Flash Video',
    'fnt': 'Windows Font',
    'fon': 'Font',
    'gadget': 'Windows Gadget',
    'gif': 'GIF Image',
    'gpx': 'GPS Exchange',
    'gsheet': 'Spreadsheet',
    'gz': 'Gnu Compressed',
    'h': 'Header',
    'heic': 'High Efficiency Image',
    'hpp': 'Header',
    'htm': 'HTML Document',
    'html': 'HTML Document',
    'iff': 'Interchange',
    'inc': 'Include',
    'indd': 'Adobe InDesign',
    'iso': 'ISO Image',
    'jar': 'Java Archive',
    'java': 'Java Code',
    'jpeg': 'JPEG Image',
    'jpg': 'JPEG Image',
    'js': 'JavaScript',
    'key': 'Apple Keynote',
    'kml': 'Keyhole Markup',
    'log': 'Log',
    'm3u': 'Media Playlist',
    'm4a': 'MPEG-4 Audio',
    'max': '3ds Max Scene',
    'mdb': 'MS Access',
    'mef': 'RAW Image',
    'mid': 'MIDI Audio',
    'midi': 'MIDI Audio',
    'mkv': 'MKV Video',
    'mov': 'QuickTime Movie',
    'mp3': 'MP3 Audio',
    'mpeg': 'MPEG Movie',
    'mpg': 'MPEG Movie',
    'mrw': 'Raw Image',
    'msi': 'MS Installer',
    'nb': 'Mathematica',
    'numbers': 'Numbers',
    'nef': 'RAW Image',
    'obj': 'Wavefront',
    'ods': 'Spreadsheet',
    'odt': 'Text Document',
    'otf': 'OpenType Font',
    'ots': 'Spreadsheet',
    'orf': 'RAW Image',
    'pages': 'Pages Doc',
    'pcast': 'Podcast',
    'pdb': 'Database',
    'pdf': 'PDF Document',
    'pef': 'RAW Image',
    'php': 'PHP Code',
    'php3': 'PHP Code',
    'php4': 'PHP Code',
    'php5': 'PHP Code',
    'phtml': 'PHTML Web',
    'pl': 'Perl Script',
    'pls': 'Audio Playlist',
    'png': 'PNG Image',
    'ppj': 'Adobe Premiere',
    'pps': 'MS PowerPoint',
    'ppt': 'MS PowerPoint',
    'pptx': 'MS PowerPoint',
    'prproj': 'Adobe Premiere',
    'ps': 'PostScript',
    'psb': 'Photoshop',
    'psd': 'Photoshop',
    'py': 'Python Script',
    'ra': 'Real Audio',
    'ram': 'Real Audio',
    'rar': 'RAR Compressed',
    'rm': 'Real Media',
    'rtf': 'Rich Text',
    'rw2': 'RAW',
    'rwl': 'RAW Image',
    'sh': 'Bash Shell',
    'shtml': 'Server HTML',
    'sitx': 'X Compressed',
    'sql': 'SQL Database',
    'sketch': 'Sketch',
    'srf': 'Sony RAW Image',
    'srt': 'Subtitle',
    'stc': 'OpenOffice',
    'std': 'OpenOffice',
    'sti': 'OpenOffice',
    'stw': 'OpenOffice',
    'svg': 'Vector Image',
    'svgz': 'Vector Image',
    'swf': 'Flash Movie',
    'sxc': 'OpenOffice',
    'sxd': 'OpenOffice',
    'sxi': 'OpenOffice',
    'sxm': 'OpenOffice',
    'sxw': 'OpenOffice',
    'tar': 'Archive',
    'tbz': 'Compressed',
    'tga': 'Targa Graphic',
    'tgz': 'Compressed',
    'tif': 'TIF Image',
    'tiff': 'TIFF Image',
    'torrent': 'Torrent',
    'ttf': 'TrueType Font',
    'txt': 'Text Document',
    'vcf': 'vCard',
    'vob': 'DVD-Video',
    'wav': 'Wave Audio',
    'webm': 'WebM Video',
    'wma': 'WM Audio',
    'wmv': 'WM Video',
    'wpd': 'WordPerfect',
    'wps': 'MS Works',
    'xhtml': 'XHTML Web',
    'xlr': 'MS Works',
    'xls': 'MS Excel',
    'xlsx': 'MS Excel',
    'xlt': 'MS Excel',
    'xltm': 'MS Excel',
    'xml': 'XML Document',
    'zip': 'ZIP Archive',
    'mp4': 'MP4 Video'
};

var extmime = {
    "3ds": "image/x-3ds",
    "3g2": "video/3gpp2",
    "3gp": "video/3gpp",
    "7z": "application/x-7z-compressed",
    "aac": "audio/x-aac",
    "abw": "application/x-abiword",
    "ace": "application/x-ace-compressed",
    "adp": "audio/adpcm",
    "aif": "audio/x-aiff",
    "aifc": "audio/x-aiff",
    "aiff": "audio/x-aiff",
    "apk": "application/vnd.android.package-archive",
    "asf": "video/x-ms-asf",
    "asx": "video/x-ms-asf",
    "atom": "application/atom+xml",
    "au": "audio/basic",
    "avi": "video/x-msvideo",
    "bat": "application/x-msdownload",
    "bmp": "image/bmp",
    "btif": "image/prs.btif",
    "bz": "application/x-bzip",
    "bz2": "application/x-bzip2",
    "caf": "audio/x-caf",
    "cgm": "image/cgm",
    "cmx": "image/x-cmx",
    "com": "application/x-msdownload",
    "conf": "text/plain",
    "css": "text/css",
    "csv": "text/csv",
    "dbk": "application/docbook+xml",
    "deb": "application/x-debian-package",
    "def": "text/plain",
    "djv": "image/vnd.djvu",
    "djvu": "image/vnd.djvu",
    "dll": "application/x-msdownload",
    "dmg": "application/x-apple-diskimage",
    "doc": "application/msword",
    "docm": "application/vnd.ms-word.document.macroenabled.12",
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "dot": "application/msword",
    "dotm": "application/vnd.ms-word.template.macroenabled.12",
    "dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    "dra": "audio/vnd.dra",
    "dtd": "application/xml-dtd",
    "dts": "audio/vnd.dts",
    "dtshd": "audio/vnd.dts.hd",
    "dvb": "video/vnd.dvb.file",
    "dwg": "image/vnd.dwg",
    "dxf": "image/vnd.dxf",
    "ecelp4800": "audio/vnd.nuera.ecelp4800",
    "ecelp7470": "audio/vnd.nuera.ecelp7470",
    "ecelp9600": "audio/vnd.nuera.ecelp9600",
    "emf": "application/x-msmetafile",
    "emz": "application/x-msmetafile",
    "eol": "audio/vnd.digital-winds",
    "epub": "application/epub+zip",
    "exe": "application/x-msdownload",
    "f4v": "video/x-f4v",
    "fbs": "image/vnd.fastbidsheet",
    "fh": "image/x-freehand",
    "fh4": "image/x-freehand",
    "fh5": "image/x-freehand",
    "fh7": "image/x-freehand",
    "fhc": "image/x-freehand",
    "flac": "audio/x-flac",
    "fli": "video/x-fli",
    "flv": "video/x-flv",
    "fpx": "image/vnd.fpx",
    "fst": "image/vnd.fst",
    "fvt": "video/vnd.fvt",
    "g3": "image/g3fax",
    "gif": "image/gif",
    "h261": "video/h261",
    "h263": "video/h263",
    "h264": "video/h264",
    "heif": "image/heif",
    "heic": "image/heic",
    "htm": "text/html",
    "html": "text/html",
    "ico": "image/x-icon",
    "ief": "image/ief",
    "iso": "application/x-iso9660-image",
    "jpe": "image/jpeg",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "jpgm": "video/jpm",
    "jpgv": "video/jpeg",
    "jpm": "video/jpm",
    "json": "application/json",
    "jsonml": "application/jsonml+json",
    "kar": "audio/midi",
    "ktx": "image/ktx",
    "list": "text/plain",
    "log": "text/plain",
    "lvp": "audio/vnd.lucent.voice",
    "m13": "application/x-msmediaview",
    "m14": "application/x-msmediaview",
    "m1v": "video/mpeg",
    "m21": "application/mp21",
    "m2a": "audio/mpeg",
    "m2v": "video/mpeg",
    "m3a": "audio/mpeg",
    "m3u": "audio/x-mpegurl",
    "m3u8": "application/vnd.apple.mpegurl",
    "m4a": "audio/mp4",
    "m4u": "video/vnd.mpegurl",
    "m4v": "video/x-m4v",
    "mdi": "image/vnd.ms-modi",
    "mid": "audio/midi",
    "midi": "audio/midi",
    "mj2": "video/mj2",
    "mjp2": "video/mj2",
    "mk3d": "video/x-matroska",
    "mka": "audio/x-matroska",
    "mks": "video/x-matroska",
    "mkv": "video/x-matroska",
    "mmr": "image/vnd.fujixerox.edmics-mmr",
    "mng": "video/x-mng",
    "mov": "video/quicktime",
    "movie": "video/x-sgi-movie",
    "mp2": "audio/mpeg",
    "mp21": "application/mp21",
    "mp2a": "audio/mpeg",
    "mp3": "audio/mpeg",
    "mp4": "video/mp4",
    "mp4a": "audio/mp4",
    "mp4s": "application/mp4",
    "mp4v": "video/mp4",
    "mpe": "video/mpeg",
    "mpeg": "video/mpeg",
    "mpg": "video/mpeg",
    "mpg4": "video/mp4",
    "mpga": "audio/mpeg",
    "mpkg": "application/vnd.apple.installer+xml",
    "msi": "application/x-msdownload",
    "mvb": "application/x-msmediaview",
    "mxf": "application/mxf",
    "mxml": "application/xv+xml",
    "mxu": "video/vnd.mpegurl",
    "npx": "image/vnd.net-fpx",
    "odb": "application/vnd.oasis.opendocument.database",
    "odc": "application/vnd.oasis.opendocument.chart",
    "odf": "application/vnd.oasis.opendocument.formula",
    "odft": "application/vnd.oasis.opendocument.formula-template",
    "odg": "application/vnd.oasis.opendocument.graphics",
    "odi": "application/vnd.oasis.opendocument.image",
    "odm": "application/vnd.oasis.opendocument.text-master",
    "odp": "application/vnd.oasis.opendocument.presentation",
    "ods": "application/vnd.oasis.opendocument.spreadsheet",
    "odt": "application/vnd.oasis.opendocument.text",
    "oga": "audio/ogg",
    "ogg": "audio/ogg",
    "ogv": "video/ogg",
    "ogx": "application/ogg",
    "otc": "application/vnd.oasis.opendocument.chart-template",
    "otg": "application/vnd.oasis.opendocument.graphics-template",
    "oth": "application/vnd.oasis.opendocument.text-web",
    "oti": "application/vnd.oasis.opendocument.image-template",
    "otp": "application/vnd.oasis.opendocument.presentation-template",
    "ots": "application/vnd.oasis.opendocument.spreadsheet-template",
    "ott": "application/vnd.oasis.opendocument.text-template",
    "oxt": "application/vnd.openofficeorg.extension",
    "pbm": "image/x-portable-bitmap",
    "pct": "image/x-pict",
    "pcx": "image/x-pcx",
    "pdf": "application/pdf",
    "pgm": "image/x-portable-graymap",
    "pic": "image/x-pict",
    "plb": "application/vnd.3gpp.pic-bw-large",
    "png": "image/png",
    "pnm": "image/x-portable-anymap",
    "pot": "application/vnd.ms-powerpoint",
    "potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
    "ppm": "image/x-portable-pixmap",
    "pps": "application/vnd.ms-powerpoint",
    "ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    "ppt": "application/vnd.ms-powerpoint",
    "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "psb": "application/vnd.3gpp.pic-bw-small",
    "psd": "image/vnd.adobe.photoshop",
    "pvb": "application/vnd.3gpp.pic-bw-var",
    "pya": "audio/vnd.ms-playready.media.pya",
    "pyv": "video/vnd.ms-playready.media.pyv",
    "qt": "video/quicktime",
    "ra": "audio/x-pn-realaudio",
    "ram": "audio/x-pn-realaudio",
    "ras": "image/x-cmu-raster",
    "rgb": "image/x-rgb",
    "rip": "audio/vnd.rip",
    "rlc": "image/vnd.fujixerox.edmics-rlc",
    "rmi": "audio/midi",
    "rmp": "audio/x-pn-realaudio-plugin",
    "s3m": "audio/s3m",
    "sgi": "image/sgi",
    "sgm": "text/sgml",
    "sgml": "text/sgml",
    "sid": "image/x-mrsid-image",
    "sil": "audio/silk",
    "sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
    "smv": "video/x-smv",
    "snd": "audio/basic",
    "spx": "audio/ogg",
    "srt": "application/x-subrip",
    "sub": "text/vnd.dvb.subtitle",
    "svg": "image/svg+xml",
    "svgz": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tcap": "application/vnd.3gpp2.tcap",
    "text": "text/plain",
    "tga": "image/x-tga",
    "tif": "image/tiff",
    "tiff": "image/tiff",
    "torrent": "application/x-bittorrent",
    "tsv": "text/tab-separated-values",
    "ttl": "text/turtle",
    "txt": "text/plain",
    "udeb": "application/x-debian-package",
    "uva": "audio/vnd.dece.audio",
    "uvg": "image/vnd.dece.graphic",
    "uvh": "video/vnd.dece.hd",
    "uvi": "image/vnd.dece.graphic",
    "uvm": "video/vnd.dece.mobile",
    "uvp": "video/vnd.dece.pd",
    "uvs": "video/vnd.dece.sd",
    "uvu": "video/vnd.uvvu.mp4",
    "uvv": "video/vnd.dece.video",
    "uvva": "audio/vnd.dece.audio",
    "uvvg": "image/vnd.dece.graphic",
    "uvvh": "video/vnd.dece.hd",
    "uvvi": "image/vnd.dece.graphic",
    "uvvm": "video/vnd.dece.mobile",
    "uvvp": "video/vnd.dece.pd",
    "uvvs": "video/vnd.dece.sd",
    "uvvu": "video/vnd.uvvu.mp4",
    "uvvv": "video/vnd.dece.video",
    "viv": "video/vnd.vivo",
    "vob": "video/x-ms-vob",
    "wav": "audio/x-wav",
    "wax": "audio/x-ms-wax",
    "wbmp": "image/vnd.wap.wbmp",
    "wdp": "image/vnd.ms-photo",
    "weba": "audio/webm",
    "webm": "video/webm",
    "webp": "image/webp",
    "wm": "video/x-ms-wm",
    "wma": "audio/x-ms-wma",
    "wmf": "application/x-msmetafile",
    "wmv": "video/x-ms-wmv",
    "wmx": "video/x-ms-wmx",
    "wvx": "video/x-ms-wvx",
    "xap": "application/x-silverlight-app",
    "xbm": "image/x-xbitmap",
    "xht": "application/xhtml+xml",
    "xhtml": "application/xhtml+xml",
    "xhvml": "application/xv+xml",
    "xif": "image/vnd.xiff",
    "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    "xm": "audio/xm",
    "xml": "application/xml",
    "xop": "application/xop+xml",
    "xpl": "application/xproc+xml",
    "xpm": "image/x-xpixmap",
    "xsl": "application/xml",
    "xslt": "application/xslt+xml",
    "xspf": "application/xspf+xml",
    "xvm": "application/xv+xml",
    "xvml": "application/xv+xml",
    "xwd": "image/x-xwindowdump",
    "zip": "application/zip"
};

for (var i in extensions) {
    for (var a in extensions[i][0]) {
        var desc = extensions[i][1];
        if (extdesc[extensions[i][0][a]]) {
            desc = extdesc[extensions[i][0][a]];
        }
        ext[extensions[i][0][a]] = [i, desc];
    }
}

function filemime(n, def) {
    if (typeof n === 'object') {
        n = n.name;
    }
    var fext = fileext(String(n));
    return extmime[fext] || def || 'application/octet-stream';
}

function filetype(n) {
    if (typeof n === 'object') {
        n = n.name;
    }
    var fext = fileext(String(n));
    if (ext[fext]) {
        return ext[fext][1];
    }
    else if (fext && fext.length > 1) {
        return fext.toUpperCase() + ' File';
    }
    else {
        return 'File';
    }
}

function fileIcon(node) {
    "use strict";
    var icon;

    if (node.t) {
        if (node.t & M.IS_SHARED || M.ps[node.h] || M.getNodeShareUsers(node, 'EXP').length) {
            icon = 'folder-shared';
            
            if(is_mobile){
                icon = 'folder-shared_v2';
            }
        }
        else if ( mega.megadrop.pufs[node.h] && mega.megadrop.pufs[node.h].s !== 1) {
            icon = 'puf-folder';
        }
        else {
            icon = 'folder';
        }
    }
    else if (ext[fileext(node.name)]) {
        icon = ext[fileext(node.name)][0];
    }
    else {
        icon = 'generic';
    }

    return icon;
}

function fileext(name, upper, iknowwhatimdoing) {
    'use strict';

    name = String(name || '');
    if (!name) {
        name = 'unknown';
    }

    var ext = name.substr(name.lastIndexOf('.') + 1);
    if (ext === name) {
        ext = '';
    }
    else if (!iknowwhatimdoing) {
        ext = ext
            .replace(/<[^>]*>/g, '')
            .replace(/[^\w+]/g, '');

        if (ext.length > 9) {
            ext = ext.substr(0, 9);
        }
    }

    return upper ? ext.toUpperCase() : ext.toLowerCase();
}
