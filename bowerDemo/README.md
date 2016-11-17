# learnangular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

***package.json文件
包含了这个项目最直观的描述
name：运行yo angular指定的名字，不是项目名
version：开发迭代中，其值一直递增
devDependencies,dependencies声明项目所要依赖的node包，前者用于开发过程中，后者是生产环境中
每个插件后面的版本中^指的是最后两个数可变，~指的是最后一个数可变
engines：当前项目所需的node版本
scripts：可以直接使用npm运行的脚本命令
 ***Gruntfile.js文件
 配置grunt
 ***bower.json文件
 配置bower,安装相应的前端框架和组件，拉线上的哪些依赖项，和package.json的dependencies类似
 ***.travis.xml文件
 专门为开源打造的集成环境
 ***.jshintrc文件
 jshin的配置文件
 ***.gitignore文件
 指定了我们当前项目要忽略哪些不上传到git仓库的文件
 ***.gitattributes文件
 是git的配置项
 ***.editorconfig文件
 作了很多编辑器的插件，让其支持editorconfig这个文件，用于指定当前项目的代码风格（如开头空格数量，tab键多少个空格）
 ***.bowerrc文件
 是bower本身的配置项，用于将bower.json中拉下来的依赖包放在哪个文件下
 ***test文件夹
 用来执行项目的自动化测试
 ***bower_components文件夹
 用来存放bower.json中拉下来的依赖项
 ***node_modules文件夹
 用来存放package.json中拉下来的依赖项
 ***app文件夹
 是当前项目最重要的，存放整个项目的源文件，其中的views文件夹存放的是angular中的views
 
 
