<style>
  body {
    padding-top: 55px;
  }
  .logo{
    width: 40px;
    height: 40px;
    margin: -10px 5px;
  }
</style>
<template>
  <div>
    <div class="container-fluid">
    <div class="row">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div style="height: 50px;">
          <div class="navbar-header">
            <a class="navbar-brand">
              <img class="logo" src="static/images/logo.jpg">
            </a>
          </div>
          <div class="pull-right">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <span>账号</span>
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#">设置</a></li>
                  <li><a href="#" @click="logout">注销</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-2">
        <div class="well">
          <div id="sideMenu" class="panel-group">
            <div class="panel-heading">
              <h4 style="text-align:center">菜单</h4>
            </div>
            <div class="panel panel-default accordion-group">
              <div class="panel-heading accordion-heading" data-toggle="collapse"
                   href="#collapseOne" style="cursor:pointer">
                <!--a class="accordion-toggle">行业品牌</a-->
                <span class="glyphicon glyphicon-th-list" aria-hidden="true"> 活动管理</span>
              </div>
              <div id="collapseOne" class="panel-collapse collapse accordion-body"
                   style="height: 0px;">
                <div class="panel-body">
                  <ul class="nav nav-pills nav-stacked">
                    <li><router-link to="/main/ai">活动列表</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default accordion-group">
              <div class="panel-heading accordion-heading" data-toggle="collapse"
                   href="#collapseTwo" style="cursor:pointer">
                <span class="glyphicon glyphicon-tags" aria-hidden="true"> 专家管理</span>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse accordion-body"
                   style="height: 0px;">
                <div class="panel-body">
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="/specialist/index">专家列表</a></li>
                    <li><a href="/specialistGroup/index">专家组列表</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default accordion-group">
              <div class="panel-heading accordion-heading" data-toggle="collapse"
                   href="#collapseThree" style="cursor:pointer">
                <span class="glyphicon glyphicon-erase" aria-hidden="true"> 审核权限</span>
              </div>
              <div id="collapseThree" class="panel-collapse collapse accordion-body"
                   style="height: 0px;">
                <div class="panel-body">
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="/verifyAuthority/index">权限列表</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default accordion-group">
              <div class="panel-heading accordion-heading" data-toggle="collapse"
                   href="#collapseFour" style="cursor:pointer">
                <span class="glyphicon glyphicon-book" aria-hidden="true"> 作品审核</span>
              </div>
              <div id="collapseFour" class="panel-collapse collapse accordion-body"
                   style="height: 0px;">
                <div class="panel-body">
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="/production/index">作品列表</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default accordion-group">
              <div class="panel-heading accordion-heading" data-toggle="collapse"
                   href="#collapseFive" style="cursor:pointer">
                <span class="glyphicon glyphicon-king" aria-hidden="true"> 账号管理</span>
              </div>
              <div id="collapseFive" class="panel-collapse collapse accordion-body"
                   style="height: 0px;">
                <div class="panel-body">
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="/account/index">账号</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default accordion-group">
              <div class="panel-heading accordion-heading" data-toggle="collapse"
                   href="#collapseSix" style="cursor:pointer">
                <span class="glyphicon glyphicon-user" aria-hidden="true"> 专家打分</span>
              </div>
              <div id="collapseSix" class="panel-collapse collapse accordion-body"
                   style="height: 0px;">
                <div class="panel-body">
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="/production/index">作品列表</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="main-content" class="col-lg-10">
        <router-view></router-view>
      </div>

    </div>
  </div>
    <footer class="footer navbar-fixed-bottom ">
    <div class="container">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">Copyright <span class="glyphicon glyphicon-copyright-mark"></span> 2016-2017 OUC universe head office All Rights Reserved.</div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </footer>
  </div>
</template>
<script>
  export default {
    name: 'MainPage',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App first vue page'
      }
    },
    methods: {
      logout: function () {
        window.location.href = 'http://localhost:9001/logout'
      }
    }
  }
</script>
