<template>
  <div>
    <div class="row">
      <ol class="breadcrumb">
        <li class="active">活动列表</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <form id="search_form" class="form-horizontal" enctype="multipart/form-data">
              <div class="form-group">
                <label class="col-lg-2 control-label" for="articleIndustryID">机构</label>
                <div class="col-lg-2">
                  <select id="articleIndustryID" name="articleIndustryID" class="form-control">
                    <option value="" selected="selected">请选择</option> <#list il!! as	i>
                    <option value=""></option> </#list>
                  </select>
                </div>
                <label class="col-lg-2 control-label" for="articleName">名称</label>
                <div class="col-lg-2">
                  <input id="articleName" name="articleName" type="text" class="form-control" placeholder="请输入名称" v-model="activityName"/>
                </div>
                <label class="col-lg-2 control-label" for="articleClassifyID">分类</label>
                <div class="col-lg-2">
                  <select id="articleClassifyID" name="articleClassifyID"
                          class="form-control">
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-2 control-label" for="activityStartTime">起始时间</label>
                <div class="col-lg-2">
                  <div class="input-group date dateTimePickerDiv" data-link-field="activityStartTime" data-link-format="yyyy-mm-dd">
                    <input id="activityStartTime" name="orderCreatedStart" class="form-control" size="1" type="text" v-model="activityStartTime">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                  </div>
                  <input type="hidden"  value="" />
                </div>
                <label class="col-lg-2 control-label" for="activityEndTime">结束时间</label>
                <div class="col-lg-2">
                  <div class="input-group date dateTimePickerDiv" data-link-field="activityEndTime" data-link-format="yyyy-mm-dd">
                    <input id="activityEndTime" name="activityEndTime" class="form-control" size="1" type="text" v-model="activityEndTime">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                  </div>
                </div>
                <div class="col-lg-2 col-lg-offset-2">
                  <button id="btn-search" class="btn btn-primary"
                          data-loading-text="Loading..." type="button" @click="search">查询</button>
                  <button id="btn-reset" class="btn btn-primary"
                          data-loading-text="Loading..." type="button">清空</button>
                  <router-link to="activity/add">
                    <button class="btn btn-primary btn-add" data-bmuuid=""
                          data-loading-text="Loading..." type="button">增加</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="tableLayer" class="row">
      <div class="row">
        <div class="col-lg-12">
          <table class="table table-striped table-bordered table-condensed">
            <thead>
            <tr>
              <th>ID</th>
              <th>活动名称</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th colspan="2">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in lists">
              <td>{{item.activityID}}</td>
              <td>{{item.activityName}}</td>
              <td>{{item.activityStartTime}}</td>
              <td>{{item.activityEndTime}}</td>
              <td>
                <router-link :to="'activity/edit/'+item.activityID">
                  <button class="btn btn-primary btn-edit" data-id="">编辑</button>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2">
        <small>每页
        <select v-model="display" @change="selectPageSize">
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
          条
        </small>
      </div>
      <div id="tnt_pagination" class="col-lg-8 text-center">
        <v-pagination :total="total" :current-page='current' :display="display" @pagechange="pagechange"></v-pagination>
      </div>
      <div class="col-lg-2">
        <small>共 <span class="badge">{{total}}</span> 项</small>
      </div>
    </div>
  </div>
</template>
<script>
  import Pagination from '@/components/common/Pagination'
  export default {
    name: 'ActivityIndex',
    data: function () {
      return {
        lists: [],
        total: 6,
        display: 5,
        current: 1,
        activityName: ''
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData: function () {
        this.$axios.post('/aapi/activity/list/0/' + this.display + '?' + Math.random())
          .then(function (response) {
            console.log(response.data)
            this.lists = response.data.list
            this.total = response.data.count
            console.log('total:' + this.total)
          }.bind(this))
          .catch(function (error) {
            console.log(error)
          })
      },
      pagechange: function (currentPage) {
        console.log(currentPage)
        let page = currentPage - 1
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.$axios.post('/aapi/activity/list/' + page + '/' + this.display + '?' + Math.random())
          .then(function (response) {
            console.log(response.data)
            this.lists = response.data.list
            this.total = response.data.count
            console.log('total:' + this.total)
          }.bind(this))
          .catch(function (error) {
            console.log(error)
          })
      },
      search: function () {
        this.getPageData(0)
      },
      getPageData: function (page) {
        console.log(this.$constVal)
        let param = new URLSearchParams()
        param.append('activityName', this.activityName)
        this.$axios.post('/aapi/activity/list/' + page + '/' + this.display + '?' + Math.random(),
          param, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        ).then((response) => {
          console.log(response.data)
          this.lists = response.data.list
          this.total = response.data.count
        })
      },
      selectPageSize: function () {
        this.getPageData(0)
      }
    },
    components: {
      'v-pagination': Pagination
    }
  }
</script>
