<template>
  <div id="editor">
    <ol class="tabs">
			<li v-for="(item, index) in resume.config" @click="selected = item.field" :class="{active: item.field === selected}">
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-${item.icon}`"></use>
				</svg>
      </li>
    </ol>
    <ol class="pannels">
			<li v-for="item in resume.config" v-show="item.field === selected">
				<div v-if="resume[item.field] instanceof Array">
					<div v-for="(subitem, index) in resume[item.field]" class="item">
						<div class="resume-field" v-for="(value, key) in subitem">
							<label> {{ key }}</label>
							<el-input  :value="value" @click="changeResumeField(`${item.field}.${index}.${key}`, $event.target.value)" clearable></el-input>
						</div>
						<hr>
						<el-button-group class="btn-group">
							<el-button type="info" icon="el-icon-plus" plain @click="Add =`${item.field}`"></el-button>
							<el-button type="info" icon="el-icon-minus" plain @click="Remove = `${item.field}`, index"></el-button>
						</el-button-group>
					</div>
				</div>
				<div v-else class="resume-field" v-for="(value, key) in resume[item.field]">
					<label> {{ key }} </label>
					<el-input :value="value" @click="changeResumeField(`${item.field}.${key}`, $event.target.value)" clearable></el-input>
				</div>
			</li>
    </ol>
  </div>
</template>


<script>
export default {
  computed: {
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        return this.$store.commit("switchTab", value);
      }
    },
    resume() {
      return this.$store.state.resume;
    },
    Add: {
      get() {
        return this.$store.state.resume;
      },
      set(path) {
        this.$store.commit("addItem", path);
      }
		},	
    Remove: {
      get() {
        return this.$store.state.resume;
			},
			set(path, index) {
				this.$store.commit('removeItem', path, index);
			}
		}
  },
  methods: {
    changeResumeField(path, value) {
      this.$store.commit("updateResume", {
        path,
        value
      });
    }
  }
};
</script>


<style lang="less">
#editor {
  width: 550px;
  overflow: hidden;
  border-radius: 7px;
  background: white;
  margin: 3px 24px 3px 16px;
  box-shadow: 0 1.5px 3px 1px rgba(0, 0, 0, 0.4);
  display: flex;

  ol {
    list-style: none;
    padding-top: 8px;
  }

  > .tabs {
    background: black;

    li {
      padding: 12px 28px;

      &.active {
        background: white;

        > svg {
          fill: black;
        }
      }

      svg {
        fill: white;
      }
    }
  }

  > .pannels {
    overflow: auto;
    width: 100%;
    padding: 32px;

    .item {
      position: relative;

      .resume-field {
        padding: 10px;

        label {
          display: block;
          margin-bottom: 15px;
        }
        input[type="text"] {
          &:focus {
            outline: none;
          }
        }
      }

      hr {
        margin: 10px 0;
        border-color: rgba(242, 246, 252, 0.3);
      }

      .btn-group {
        position: absolute;
        top: 10px;
        right: 10px;

        button {
          padding: 5px 12px;

          i {
            font-size: 0.5em;
          }
        }
      }
    }

    .content {
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        padding: 4px 8px;
      }

      > hr {
        margin-bottom: 16px;
        border-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
