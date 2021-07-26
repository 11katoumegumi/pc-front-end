<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2
        class="all"
        @mouseenter="isEnter = true"
        @mouseleave="isEnter = false"
      >
        全部商品分类
      </h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div
        @mouseenter="isEnter = true"
        @mouseleave="isEnter = false"
        class="sort"
        :style="[{ display: isShowNav || isEnter ? 'block' : 'none' }]"
      >
        <div class="all-sort-list2" @click="goSearch">
          <div class="item bo" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <a
                :data-categoryName="c1.categoryName"
                data-level="1"
                :data-categoryId="c1.categoryId"
                >{{ c1.categoryName }}
              </a>
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryName="c2.categoryName"
                      data-level="2"
                      :data-categoryId="c2.categoryId"
                      >{{ c2.categoryName }}
                    </a>
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a
                        :data-categoryName="c3.categoryName"
                        data-level="3"
                        :data-categoryId="c3.categoryId"
                        >{{ c3.categoryName }}
                      </a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      isShowNav: true,
      isEnter: false,
    };
  },
  mounted() {
    // 获取数据
    this.getCategoryList();
  },
  methods: {
    ...mapActions("home", ["getCategoryList"]),
    goSearch(e) {
      // 获取商品信息
      const {
        categoryname: categoryName,
        categoryid: categoryId,
        level,
      } = e.target.dataset;
      const {
        $router,
        $route: { params },
      } = this;
      // 判断点击的是否是商品
      if (!level) return;

      // 跳转搜索页面
      $router.push({
        name: "Search",
        query: {
          categoryName,
          [`category${level}Id`]: categoryId,
        },
        //跳转加上params参数
        params: params,
      });
    },
  },
  computed: {
    ...mapState("home", ["categoryList"]),
  },
  watch: {
    $route: {
      handler(route) {
        if (route.path === "/" || route.path === "/home") this.isShowNav = true;
        else this.isShowNav = false;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            &:hover {
              background-color: tomato;
            }

            a {
              color: #333;
              &:hover {
                cursor: pointer;
              }
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            bottom: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                  a {
                    &:hover {
                      background-color: tomato;
                      cursor: pointer;
                    }
                  }
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
