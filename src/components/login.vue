<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              请登录
            </h3>
          </div>
          <div class="panel-body">
            <form id="save_file_from" class="form-horizontal" enctype="multipart/form-data">
              <div class="form-group">
                <div class="col-lg-12">
                  <input id="sAccountName" name="sAccountName" type="text" class="form-control" placeholder="请输入用户名称" data-bv-field="sAccountName" v-mode="userName">
                  <i class="form-control-feedback glyphicon glyphicon-remove" style="" data-bv-icon-for="sAccountName" v-show="false"></i>
                  <small class="help-block" style="" data-bv-validator="notEmpty" data-bv-for="sAccountName" data-bv-result="INVALID">用户名称必填</small>
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-12">
                  <input id="sAccountPw" name="sAccountPw" type="password" class="form-control" placeholder="请输入密码" data-bv-field="sAccountPw" v-mode="password">
                  <i class="form-control-feedback glyphicon glyphicon-remove" style="" data-bv-icon-for="sAccountPw" v-show="false"></i>
                  <small class="help-block" style="" data-bv-validator="notEmpty" data-bv-for="sAccountPw" data-bv-result="INVALID">密码必填</small>
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-12">
                  <input type="checkbox" value="remember-me"> 记住我
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-12">
                  <router-link to="/main">
                    <button class="btn btn-block btn-lg">登录</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
    <div class="row">
      <div v-show="false" class="alert alert-warning">
        <a href="#" class="close" data-dismiss="alert">&times;</a>
        <strong>登录失败！</strong>用户或密码输入错误！<span id="failureReason"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: {
    userName: 'admin',
    password: '******'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    padding-top: 70px;
  }
</style>
