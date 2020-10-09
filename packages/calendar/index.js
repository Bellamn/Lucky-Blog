/**
 * @author Yuhang Deng
 * Date: 2020/09/10
 */
import Dcalendar from './src/calendar.vue';

Dcalendar.install = function(Vue) {
  Vue.component(Dcalendar.name, Dcalendar)
}

export default Dcalendar