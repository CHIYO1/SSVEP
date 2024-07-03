### MainView.vue（views文件夹中）

引用element-plus组件确定网页的整体布局，包括侧边栏，顶部栏以及内容部分。

在内容部分使用配置路由来实现页面切换



### components文件夹

#### CommonHeader.vue

编写顶部栏组件

#### CommonAside.vue

编写侧边栏组件，并实现点击路由跳转功能



### views文件夹

#### HomeView.vue

主页代码

#### DataBase.vue

路由中转，配置两个子路由页面，代码分别在LocalData.vue和RealTimeData.vue文件中

分别为本地数据和实时数据页面



#### EyeHealth.vue

路由中转，配置三个子路由页面，代码分别在ColorPerception.vue、VisualAcuityTesting.vue和SensitivityTesting.vue文件中

分别为颜色感知、视力检测和视觉灵敏度检测页面



#### VisualDetection.vue

路由中转，配置三个子路由页面，代码分别在GlaucomaTest.vue、CataractDetection.vue和MacularTest.vue文件中

分别为青光眼检测、白内障检测和黄斑病检测页面



#### VisualAnalysis.vue

视功能分析页面代码



#### ChartData.vue

图表数据页面代码



#### TreatmentRecommended.vue

治疗建议页面代码



#### HistoricalAssessments.vue

历史测评页面代码



#### SettingView.vue

设置页面代码，其中进行了分页，对应子页面文件写在了components文件夹中的PublicProfile.vue、EmailSetting.vue和AccessibilitySetting.vue中

分别对应个人档案、邮箱、辅助功能设置的页面的代码。



### 其他文件

#### /router/index.js      对路由进行的配置

#### /stores/counter.js    Pinia全局状态管理的配置

#### package.js    依赖项的配置

