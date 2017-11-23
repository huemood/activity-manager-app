<template>
  <div>
  <div class="row">
    <ol class="breadcrumb">
      <li><router-link to="/main/ai">活动列表</router-link></li>
      <li class="active">活动添加</li>
    </ol>
  </div>
  <div class="row">
    <form id="save_file_from" class="form-horizontal"
          enctype="multipart/form-data">
      <div class="panel panel-default">
        <div class="panel-body">
          <input name="articleID" type="hidden"/>
          <div class="form-group">
            <label class="col-lg-2 control-label" for="activityName">名称</label>
            <div class="col-lg-3">
              <input id="activityName" name="activityName" type="text"
                     class="form-control" placeholder="请输入名称" v-model="activityName"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-2 control-label" for="activityStartTime">起始时间</label>
            <div class="col-lg-3">
              <input v-model="activityStartTime"/>
              <div class="input-group date dateTimePickerDiv" data-link-field="orderCreatedStart" data-link-format="yyyy-mm-dd">
                <input id="orderCreatedStart" name="orderCreatedStart" class="form-control" size="1" type="text" value="" readonly>
                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
              </div>
              <input type="hidden"  value="" />
            </div>
            <label class="col-lg-2 control-label" for="activityEndTime">结束时间</label>
            <div class="col-lg-3">
              <input v-model="activityEndTime"/>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-3"></div>
    <div class="col-lg-3">
      <button id="btn-add" class="btn btn-primary"
              data-loading-text="Loading..." type="button" v-on:click="save">保存</button>
    </div>
  </div>
    <div v-show="false">
  <div class="alert alert-warning">
    <a href="#" class="close" data-dismiss="alert"></a> <strong>添加失败！</strong>请联系系统管理员!
  </div>
    </div>
    <div v-show="successElert" id="myAlert" class="alert alert-success">success
      <strong>成功！</strong>
      <a href="#" class="close" data-dismiss="alert">&times;</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ActivityAdd',
    data: {
      activityName: '',
      activityStartTime: '',
      activityEndTime: '',
      successElert: false
    },
    methods: {
      save: function () {
        this.$axios.post('http://localhost:9001/api/activity/add', {
          activityName: this.activityName,
          activityStartTime: this.activityStartTime,
          activityEndTime: this.activityStartTime
        }).then((response) => {
          console.log(response.data.code)
          this.successElert = true
          console.log(this)
          setTimeout(function () {
            this.$router.push('/main/ai')
          }.bind(this), 2000)
        })
      }
    }
  }
</script>
