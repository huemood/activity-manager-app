<template>
  <div>
  <div class="row">
    <ol class="breadcrumb">
      <li><router-link to="/main/ai">活动列表</router-link></li>
      <li class="active">活动{{operateTxt}}</li>
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
              <div class="input-group date dateTimePickerDiv" data-link-field="orderCreatedStart" data-link-format="yyyy-mm-dd">
                <input id="orderCreatedStart" name="orderCreatedStart" class="form-control" size="1" type="text" v-model="activityStartTime">
                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
              </div>
              <input type="hidden"  value="" />
            </div>
            <label class="col-lg-2 control-label" for="activityEndTime">结束时间</label>
            <div class="col-lg-3">
              <div class="input-group date dateTimePickerDiv" data-link-field="activityEndTime" data-link-format="yyyy-mm-dd">
                <input id="activityEndTime" name="activityEndTime" class="form-control" size="1" type="text" v-model="activityEndTime">
                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
              </div>
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
              data-loading-text="Loading..." type="button" v-on:click="save">{{operateTxt}}</button>
    </div>
  </div>
    <div v-show="false">
  <div class="alert alert-warning" v-show="errorElert">
    <a href="#" class="close" data-dismiss="alert"></a> <strong>添加失败！</strong>请联系系统管理员!
  </div>
    </div>
    <div class="alert alert-success" v-show="successElert">
      <a href="#" class="close" data-dismiss="alert"></a> <strong>{{operateTxt}}成功！</strong>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ActivityAdd',
    data: function () {
      return {
        activityName: '',
        activityStartTime: '',
        activityEndTime: '',
        successElert: false,
        errorElert: false,
        operateTxt: '添加'
      }
    },
    created () {
      console.log('index->add activityID:' + this.$route.params.id)
      if (this.$route.params.id) {
        this.operateTxt = '修改'
        this.getOneData(this.$route.params.id)
      }
    },
    methods: {
      save: function () {
        this.$axios.post('/aapi/activity/add', {
          activityID: this.$route.params.id ? this.$route.params.id : null,
          activityName: this.activityName,
          activityStartTime: this.activityStartTime,
          activityEndTime: this.activityStartTime
        }).then((response) => {
          if (response.data.code === '1') {
            this.successElert = true
            setTimeout(function () {
              this.$router.push({name: 'ActivityIndex'})
            }.bind(this), 2000)
          } else {
            this.errorElert = true
          }
        })
      },
      getOneData: function (id) {
        this.$axios.post('/aapi/activity/get/' + id).then((response) => {
          console.log('response:' + response.data.code)
          if (response.data.code === '1') {
            console.log('response result:' + response.data.result.activityName)
            this.activityName = response.data.result.activityName
            this.activityStartTime = response.data.result.activityStartTime
            this.activityEndTime = response.data.result.activityEndTime
          }
        })
      }
    }
  }
</script>
