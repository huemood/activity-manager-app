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
      <v-menu></v-menu>
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
  import VMenu from './Menu'
  export default {
    name: 'MainPage',
    components: {'v-menu': VMenu},
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
