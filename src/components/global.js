import Vue from 'vue'

function changeStr(str){
  return str.substr(0,1).toUpperCase() + str.slice(1);
}

const requireComponent = require.context('.',false,/\.vue$/)
requireComponent.keys().forEach(fileName =>{
  const config = requireComponent(fileName)
  const componentName = changeStr(fileName.replace(/^\.\//,'').replace(/\.\w+$/,''))
  Vue.component(componentName,config.default || config)
})