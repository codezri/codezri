(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return l})),i.d(n,"metadata",(function(){return r})),i.d(n,"toc",(function(){return c})),i.d(n,"default",(function(){return s}));var t=i(3),o=i(8),a=(i(0),i(122)),l={title:"Reference"},r={unversionedId:"buildzri/reference",id:"buildzri/reference",isDocsHomePage:!1,title:"Reference",description:"You can configure the BuildZri program execution via two approches: editing the configuration file or",source:"@site/docs/buildzri/reference.md",slug:"/buildzri/reference",permalink:"/docs/buildzri/reference",editUrl:"https://github.com/codezri/codezri.github.io/edit/master/docs/buildzri/reference.md",version:"current",sidebar:"docs",previous:{title:"How to Use",permalink:"/docs/buildzri/integrate"}},c=[{value:"Configuration file",id:"configuration-file",children:[{value:"<code>std: string</code>",id:"std-string",children:[]},{value:"<code>version: string</code>",id:"version-string",children:[]},{value:"<code>output: string</code>",id:"output-string",children:[]},{value:"<code>include: object</code>",id:"include-object",children:[]},{value:"<code>source: object</code>",id:"source-object",children:[]},{value:"<code>options: object</code>",id:"options-object",children:[]},{value:"<code>definitions: object</code>",id:"definitions-object",children:[]}]},{value:"Command-line arguments",id:"command-line-arguments",children:[{value:"<code>--verbose</code>",id:"--verbose",children:[]}]},{value:"Global variables",id:"global-variables",children:[{value:"<code>BZ_VERSION</code>",id:"bz_version",children:[]},{value:"<code>BZ_OS</code>",id:"bz_os",children:[]},{value:"<code>BZ_ARCHL</code>",id:"bz_archl",children:[]},{value:"<code>BZ_ARCH</code>",id:"bz_arch",children:[]},{value:"<code>BZ_COMMIT</code>",id:"bz_commit",children:[]}]},{value:"Cross-platform definitions",id:"cross-platform-definitions",children:[]}],b={toc:c};function s(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},b,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can configure the BuildZri program execution via two approches: editing the configuration file or\nproviding CLI arguments."),Object(a.b)("h2",{id:"configuration-file"},"Configuration file"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"buildzri.config.json")," file holds all build configurations of the particular C++ project. This file\nis mandatory to start compilation with the BuildZri tool."),Object(a.b)("h3",{id:"std-string"},Object(a.b)("inlineCode",{parentName:"h3"},"std: string")),Object(a.b)("p",null,"Defines the standard C++ version. i.e.,: ",Object(a.b)("inlineCode",{parentName:"p"},"c++17")),Object(a.b)("h3",{id:"version-string"},Object(a.b)("inlineCode",{parentName:"h3"},"version: string")),Object(a.b)("p",null,"Project version. i.e.,: ",Object(a.b)("inlineCode",{parentName:"p"},"1.0.0"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"BZ_VERSION")," global variable receives this value before the compilation\nprocess. The version string won't be validated, so you use any preferred version number format."),Object(a.b)("h3",{id:"output-string"},Object(a.b)("inlineCode",{parentName:"h3"},"output: string")),Object(a.b)("p",null,"Binary file output of the C++ project. BuildZri automatically appends ",Object(a.b)("inlineCode",{parentName:"p"},".exe")," to this value on Windows."),Object(a.b)("h3",{id:"include-object"},Object(a.b)("inlineCode",{parentName:"h3"},"include: object")),Object(a.b)("p",null,"Directories to be included into the compiler execution for searching for header files."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"include": {\n    "*": [\n        ".",\n        "lib",\n        "lib/asio/include"\n    ],\n    "windows": [\n        "lib/webview/windows"\n    ]\n}\n')),Object(a.b)("h3",{id:"source-object"},Object(a.b)("inlineCode",{parentName:"h3"},"source: object")),Object(a.b)("p",null,"Source files to be included into the compiler execution. Supports wildcard definitions with the\nPython ",Object(a.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/glob.html#glob.glob"},"glob syntax"),"."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"source": {\n    "*": [\n        "api/*/*.cpp",\n        "process.cpp",\n        "ui.cpp"\n    ],\n    "windows": [\n        "window_win.cpp"\n    ],\n    "darwin": [\n        "window_mac.mm"\n    ],\n    "linux": [\n        "window_linux.cpp",\n        "lib/linux/*.cpp"\n    ]\n}\n')),Object(a.b)("h3",{id:"options-object"},Object(a.b)("inlineCode",{parentName:"h3"},"options: object")),Object(a.b)("p",null,"Additional compiler flags for each compiler implementation. Check the following documentations to learn\nmore about compiler flags:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GNU C/C++ compiler flags: ",Object(a.b)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/gcc.1.html"},"manual")),Object(a.b)("li",{parentName:"ul"},"Apple Clang LLVM compiler flags: ",Object(a.b)("a",{parentName:"li",href:"https://clang.llvm.org/docs/UsersManual.html"},"manual")),Object(a.b)("li",{parentName:"ul"},"Microsoft Visual C++ compiler flags: ",Object(a.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cpp/build/reference/compiler-options"},"manual"))),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"options": {\n    "windows": [\n        "/EHsc"\n    ],\n    "darwin": [\n        "-framework Cocoa"\n    ],\n    "linux": [\n        "-Os",\n        "-pipe"\n    ]\n}\n')),Object(a.b)("h3",{id:"definitions-object"},Object(a.b)("inlineCode",{parentName:"h3"},"definitions: object")),Object(a.b)("p",null,"C/C++ preprocessor macro defnitions."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"definitions": {\n    "*": [\n        "PROGRAM_VERSION=\\\\\\"${BZ_VERSION}\\\\\\""\n    ],\n    "linux": [\n        "WEBVIEW_GTK=1",\n    ],\n    "darwin": [\n        "WEBVIEW_COCOA=1"\n    ],\n    "windows": [\n        "_HAS_STD_BYTE=0"\n    ]\n}\n')),Object(a.b)("h2",{id:"command-line-arguments"},"Command-line arguments"),Object(a.b)("p",null,"Command-line arguments help you to change the build tool execution behavior without changing the configuration\nfile."),Object(a.b)("h3",{id:"--verbose"},Object(a.b)("inlineCode",{parentName:"h3"},"--verbose")),Object(a.b)("p",null,"Prints build tool progress into the console. This CLI argument is helpful for diagnosing errors in the pre-compilation\nstages."),Object(a.b)("h2",{id:"global-variables"},"Global variables"),Object(a.b)("p",null,"Global variables can be used to change the configuration values dynamically before the compilation process.\nYou can use global variables with ",Object(a.b)("inlineCode",{parentName:"p"},"output"),", ",Object(a.b)("inlineCode",{parentName:"p"},"definitions"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"options")," configuration keys.\nGlobal variables come with the following syntax."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"${BZ_VARIABLE_NAME}\n")),Object(a.b)("p",null,"BuildZri supports the following global variables:"),Object(a.b)("h3",{id:"bz_version"},Object(a.b)("inlineCode",{parentName:"h3"},"BZ_VERSION")),Object(a.b)("p",null,"Project version from the configuration file."),Object(a.b)("h3",{id:"bz_os"},Object(a.b)("inlineCode",{parentName:"h3"},"BZ_OS")),Object(a.b)("p",null,"Operating system shortname: ",Object(a.b)("inlineCode",{parentName:"p"},"linux"),", ",Object(a.b)("inlineCode",{parentName:"p"},"mac"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"win")),Object(a.b)("h3",{id:"bz_archl"},Object(a.b)("inlineCode",{parentName:"h3"},"BZ_ARCHL")),Object(a.b)("p",null,"The current machine's CPU architecture. This value is obtained with the ",Object(a.b)("inlineCode",{parentName:"p"},"platform.machine().lower()"),"\nPython code snippet."),Object(a.b)("h3",{id:"bz_arch"},Object(a.b)("inlineCode",{parentName:"h3"},"BZ_ARCH")),Object(a.b)("p",null,"Shortname of the ",Object(a.b)("inlineCode",{parentName:"p"},"BZ_ARCHL")," value. i.e.,: This variable will return ",Object(a.b)("inlineCode",{parentName:"p"},"x64")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"amd64")," or ",Object(a.b)("inlineCode",{parentName:"p"},"x86_64"),"."),Object(a.b)("h3",{id:"bz_commit"},Object(a.b)("inlineCode",{parentName:"h3"},"BZ_COMMIT")),Object(a.b)("p",null,"The latest commit hash of the Git repository. This value is extracted by using the following Git command via\nthe Python script:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'git log -n 1 main --pretty=format:"%H"\n')),Object(a.b)("p",null,"Example usage:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"definitions": {\n    "*": [\n        "PROGRAM_COMMIT=\\\\\\"${BZ_COMMIT}\\\\\\""\n    ],\n')),Object(a.b)("h2",{id:"cross-platform-definitions"},"Cross-platform definitions"),Object(a.b)("p",null,"BuildZri is a cross-platform C/C++ build tool, so how to define configuration values for each operating system?\nCross-platform configuration objects typically accept the following properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"*"),": For all operating systems"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"linux"),": For GNU/Linux platforms"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"darwin"),": For macOS"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"windows"),": For Windows")),Object(a.b)("p",null,"You can define configurations for each operating system by using the above properties."),Object(a.b)("p",null,"For example, the following JSON snippet set platform-specific macros for each operating system and\nset one generic macro for all operating systems:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"definitions": {\n    "*": [\n        "PROGRAM_VERSION=\\\\\\"${BZ_VERSION}\\\\\\""\n    ],\n    "linux": [\n        "WEBVIEW_GTK=1",\n    ],\n    "darwin": [\n        "WEBVIEW_COCOA=1"\n    ],\n    "windows": [\n        "_HAS_STD_BYTE=0"\n    ]\n}\n')),Object(a.b)("p",null,"This cross-platform definition syntax works with ",Object(a.b)("inlineCode",{parentName:"p"},"source"),", ",Object(a.b)("inlineCode",{parentName:"p"},"include"),", ",Object(a.b)("inlineCode",{parentName:"p"},"definitions"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"options")," configuration\nobjects."))}s.isMDXComponent=!0}}]);