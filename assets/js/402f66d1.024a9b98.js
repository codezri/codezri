(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{135:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cover-save-time-with-devops-62e8967903b51b6ee5a686c2aea71852.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/running-test-suite-for-app-module-ffe9fd81bf4b0d19923c7e76059df827.png"},172:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/creating-a-release-with-a-click-a8bc8b59e6038f2717baa59d0f6ee541.png"},173:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sample-releasezri-release-19181c46c0cce5ebdcb38015c2c9832c.png"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(8),i=(n(0),n(122)),s={title:"How We Save Our Time with\xa0DevOps",authors:["shalithasuranga"],slug:"how-we-save-our-time-with-devops",tags:["devops","neutralinojs","javascript","c++","automation"],image:"media/cover-save-time-with-devops.png"},r={permalink:"/blog/how-we-save-our-time-with-devops",source:"@site/blog/2022-01-03-how-we-save-our-time-with-devops.md",description:"Earlier, the software development lifecycle was simple&mdash;we didn't have automated feature delivery,",date:"2022-01-03T00:00:00.000Z",formattedDate:"January 3, 2022",tags:[{label:"devops",permalink:"/blog/tags/devops"},{label:"neutralinojs",permalink:"/blog/tags/neutralinojs"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"c++",permalink:"/blog/tags/c"},{label:"automation",permalink:"/blog/tags/automation"}],title:"How We Save Our Time with\xa0DevOps",readingTime:6.79,truncated:!0,prevItem:{title:"Neutralinojs 2023 Roadmap",permalink:"/blog/neutralinojs-2023-roadmap"},nextItem:{title:"Neutralinojs 2022 Roadmap",permalink:"/blog/neutralinojs-2022-roadmap"}},l=[{value:"Troubles with the Manual Repetitive Activities",id:"troubles-with-the-manual-repetitive-activities",children:[]},{value:"How We Implemented DevOps\xa0Concepts",id:"how-we-implemented-devops-concepts",children:[{value:"Step 0: Writing Some Shell Scripts to Boost Developers&#39; Productivity",id:"step-0-writing-some-shell-scripts-to-boost-developers-productivity",children:[]},{value:"Step 1: Building a Better Test\xa0Suite",id:"step-1-building-a-better-test-suite",children:[]},{value:"Step 2: Building the Continuous Integration (CI)\xa0Workflow",id:"step-2-building-the-continuous-integration-ci-workflow",children:[]},{value:"Step 3: Building the Continuous Delivery (CD)\xa0Workflow",id:"step-3-building-the-continuous-delivery-cd-workflow",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:l};function c(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{src:n(135).default})),Object(i.b)("p",null,"Earlier, the software development lifecycle was simple","\u2014","we didn't have automated feature delivery,\ncomplex application health checks, cloud-based test suites, etc. Later, the DevOps movement drastically\nchanged the software development processes by motivating developers to automate everything.\nDevOps helped software development teams to productively build high-quality software, deliver features/patches\nso fast, and make software systems stable."),Object(i.b)("p",null,"There were no DevOps practices in the early development stages of the Neutralinojs framework. We did framework\nreleases manually by manually collecting release notes. We manually compiled the framework on different\nplatforms before releasing a new version. The release process was too much time-consuming since there were\nno automated workflows to support our development-related activities."),Object(i.b)("p",null,"Now we save many hours thanks to the newly implemented DevOps-first development process. In this article,\nwe'll explain how Neutralinojs's DevOps processes work","\u2014","and how automation helps us to save development time.\nYou can use these DevOps practices in your projects to save your time too."),Object(i.b)("h2",{id:"troubles-with-the-manual-repetitive-activities"},"Troubles with the Manual Repetitive Activities"),Object(i.b)("p",null,"We didn't use any automated workflow with initial Neutralinojs development activities","\u2014","and had only three\nbuild scripts to produce framework's binaries on Linux, macOS, and Windows. We faced the following troubles\nbefore implementing a DevOps-first development environment."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The maintainer had to compile every pull request manually before merging to the main development branch."),Object(i.b)("li",{parentName:"ul"},"Releases had too many changes and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/neutralinojs/issues/654#issuecomment-945853188"},"broke APIs"),"\nsometimes due to the time-consuming manual release process."),Object(i.b)("li",{parentName:"ul"},"The release note generation process was too time-consuming","\u2014","we had to go through old commits manually and\nbuild up a summary before every release."),Object(i.b)("li",{parentName:"ul"},"If a new source code modification broke an existing feature, we typically noticed it when a developer\nreported the issue via a GitHub issue."),Object(i.b)("li",{parentName:"ul"},"Developers didn't have scripts to automate their development activities in their local computers.\nThey didn't have scoped test cases to verify code modifications locally before pushing to the GitHub repository.")),Object(i.b)("p",null,"As you already noticed, the previous development workflow isn't DevOps-first and not suitable for\nmodern open-source projects."),Object(i.b)("h2",{id:"how-we-implemented-devops-concepts"},"How We Implemented DevOps\xa0Concepts"),Object(i.b)("p",null,"We cannot integrate DevOps concepts into our projects instantly","\u2014","DevOps integration is a step-by-step\nprocess that we need to do by selecting the most suitable tools and workflows. Our goal was to build a\nDevOps pipeline for the following critical requirements."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Verifying every code change (commit) with a cloud-based automated test suite"),Object(i.b)("li",{parentName:"ul"},"Creating a release package with pre-built binaries for Linux, macOS, and Windows"),Object(i.b)("li",{parentName:"ul"},"Generating meaningful release notes based on a changelog file"),Object(i.b)("li",{parentName:"ul"},"Implementing a way for developers to verify their code changes locally with scoped test cases\n(This is basically about running the automated test suite locally for a specific module)"),Object(i.b)("li",{parentName:"ul"},"Boost developers' productivity by offering some Shell scripts to automate manual tasks")),Object(i.b)("p",null,"We built our DevOps pipeline with the following steps."),Object(i.b)("h3",{id:"step-0-writing-some-shell-scripts-to-boost-developers-productivity"},"Step 0: Writing Some Shell Scripts to Boost Developers' Productivity"),Object(i.b)("p",null,"We need to automate local development activities before we think about remote CI/CD workflows. Entering\nthe same Unix commands set multiple times reduces programmers' programming productivity. Therefore, we\ninitially wrote the following Shell scripts to automate local development activities."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/neutralinojs/blob/main/scripts/update_client.sh"},Object(i.b)("inlineCode",{parentName:"a"},"scripts/update_client.sh")),":\nUpdates the test app's JavaScript client library by building a new version\nfrom the source. This script is helpful when a developer adds new features to the Neutralinojs JavaScript API."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/neutralinojs/blob/main/scripts/make_res_neu.sh"},Object(i.b)("inlineCode",{parentName:"a"},"scripts/make_res_neu.sh")),":\nUpdates the test app's resources bundle by building it again from local files.\nThis script is helpful when a developer works with the resource loader and static file server modules.")),Object(i.b)("h3",{id:"step-1-building-a-better-test-suite"},"Step 1: Building a Better Test\xa0Suite"),Object(i.b)("p",null,"Programmers often change source files to add new features and fix software bugs. A simple code change\ncan silently introduce a new software bug even though you review the code changes thoroughly. Therefore,\nwe need test suites to prevent software bugs."),Object(i.b)("p",null,"Neutralinojs is written in two languages: C++ and JavaScript. Therefore, we wrote an integration test\nsuite to test both C++ and JavaScript code changes at once. Our integration test suite uses the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/mochajs/mocha"},"Mocha")," test framework. Neutralinojs JavaScript API communicates with\nthe main framework runtime via a WebSocket connection, so how can we build an integration test suite\naround this?"),Object(i.b)("p",null,"Every Neutralinojs test case spawns a Neutralinojs app instance and captures the serialized program output\nfrom a file. You can browse the source code of this test runner program from the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/blob/main/spec/runner.js"},Object(i.b)("inlineCode",{parentName:"a"},"spec/runner.js"))," file.\nSee how we test the ",Object(i.b)("a",{parentName:"p",href:"https://neutralino.js.org/docs/api/os#osexeccommandcommand-options"},Object(i.b)("inlineCode",{parentName:"a"},"os.execCommand")),"\nAPI function with the following specification."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"describe('os.execCommand', () => {\n    it('executes a command and returns result', async () => {\n        runner.run(`\n            let info = await Neutralino.os\n                        .execCommand('node --version');\n            await __close(JSON.stringify(info));\n        `);\n        let info = JSON.parse(runner.getOutput());\n        assert.ok(typeof info == 'object');\n        assert.ok(typeof info.pid == 'number');\n        assert.ok(typeof info.stdErr == 'string');\n        assert.ok(typeof info.stdOut == 'string');\n        assert.ok(typeof info.exitCode == 'number');\n\n        assert.ok(info.stdOut.charAt(0) == 'v');\n    });\n\n    it('accepts stdIn', async () => {\n        runner.run(`\n            let info = await Neutralino.os.execCommand('node',\n                        {stdIn: 'console.log(\"N\");'});\n            await __close(JSON.stringify(info));\n        `);\n        let info = JSON.parse(runner.getOutput());\n\n        assert.ok(info.stdOut.charAt(0) == 'N');\n    });\n});\n")),Object(i.b)("p",null,"Here we can use ",Object(i.b)("inlineCode",{parentName:"p"},"runner.run()")," function to execute an arbitrary JavaScript code inside a Neutralinojs\napplication instance via the Node.js context. The ",Object(i.b)("inlineCode",{parentName:"p"},"__close()")," function helps to save the output and\nclose the application via the application context. Finally, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"runner.getOutput()")," function to\nread the application instance output. We wrote our entire integration test suite by using this approach."),Object(i.b)("p",null,"You can learn more internal details about our test suite from the following YouTube video:"),Object(i.b)("iframe",{height:"480",width:"100%",src:"https://www.youtube.com/embed/DdlzDklYHVs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Also, you can browse the full source code of our integration test suite from\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/tree/main/spec"},"here"),".\nWe can verify our code changes before pushing them to the remote repository via the following command."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd spec\nnpm run test <module>\n")),Object(i.b)("p",null,"For example, if you've done a modification in the app module, you can enter ",Object(i.b)("inlineCode",{parentName:"p"},"npm run test app")," for running\napp test cases that are defined in the app scope, as shown below."),Object(i.b)("p",null,Object(i.b)("img",{src:n(171).default})),Object(i.b)("h3",{id:"step-2-building-the-continuous-integration-ci-workflow"},"Step 2: Building the Continuous Integration (CI)\xa0Workflow"),Object(i.b)("p",null,"We use a pull request-based source code management model, but sometimes we push quick fixes directly to the\nmain development stream. Therefore, our GitHub Actions-based CI workflow gets invoked on every pull request\nand commit. Once the workflow is invoked, it does the following operations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Compiling binaries on Linux, macOS, and Windows"),Object(i.b)("li",{parentName:"ul"},"Running the test suite on Linux and macOS")),Object(i.b)("p",null,"GitHub Actions VMs doesn't have built-in display devices, so our test suite runs on Linux with the\n",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Xvfb"},"Xvfb")," (X virtual frame buffer) tool. You can check the source code\nof the CI workflow from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/blob/main/.github/workflows/test_suite.yml"},"here"),"."),Object(i.b)("h3",{id:"step-3-building-the-continuous-delivery-cd-workflow"},"Step 3: Building the Continuous Delivery (CD)\xa0Workflow"),Object(i.b)("p",null,"Nowadays, everyone tends to generate release notes automatically via commit messages. But, we implemented\na changelog-based release note generation concept due to the following problematic situations."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We didn't like to force new contributors to follow a strict commit convention."),Object(i.b)("li",{parentName:"ul"},"Commit messages are literally saying what's changed","\u2014","they don't give a meaningful overview about what\nwe are delivering in a particular release.")),Object(i.b)("p",null,"Therefore, we built our own minimal release note generation solution called\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/codezri/releasezri"},"ReleaseZri"),". ReleaseZri generates\nrelease notes based on a changelog file and markdown template. Now when the maintainer invokes the\nframework's CD workflow with a version number, the following operations will happen automatically."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Building x64 binaries on Linux, macOS, and Windows"),Object(i.b)("li",{parentName:"ul"},"Generating release notes from the CHANGELOG.md file"),Object(i.b)("li",{parentName:"ul"},"Publishing a new GitHub release with build artifacts and release notes"),Object(i.b)("li",{parentName:"ul"},"Notifying the developer community via a Discord bot")),Object(i.b)("p",null,"ReleaseZri helped us to automate the CD workflow of the following repositories."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/neutralinojs"},"Neutralinojs framework")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/neutralino.js"},"Neutralinojs client library"),"\xa0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/neutralinojs-cli"},"Neutralinojs CLI"))),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"Now every software development team strives to implement DevOps workflows to release features rapidly\nand stay competitive in the modern software development market. DevOps concepts help us to build high-quality\nsoftware products by automating every manual step."),Object(i.b)("p",null,"We save many hours with the DevOps culture at the Neutralinojs codebase. Now we can generate releases\nwith a single mouse click with GitHub Actions, as shown below."),Object(i.b)("p",null,Object(i.b)("img",{src:n(172).default})),Object(i.b)("p",null,"The above action creates a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/releases/tag/v4.1.0"},"release"),"\nwith meaningful release notes, as shown below."),Object(i.b)("p",null,Object(i.b)("img",{src:n(173).default})),Object(i.b)("p",null,"If your software product doesn't follow a DevOps-first\narchitecture yet, consider implementing some DevOps principles, see how much time you can save."))}c.isMDXComponent=!0}}]);