/**
 * @author DYH
 * Date: 17/11/9
 */
import Dmenu from './src/drop-down-menu.vue'

/* istanbul ignore next */
Dmenu.install = function (Vue) {
  Vue.component(Dmenu.name, Dmenu)
}

export default Dmenu
