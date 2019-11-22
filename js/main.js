import ExpressionPanel from './Expression-panel.js';
import Slider from './Slider.js';
import Description from './Description.js';
import ShowProject from './ShowProject.js';

const expPanel = new ExpressionPanel();
expPanel.work();

const slider = new Slider();
slider.start();
slider.work();

const btnDescrThey = document.querySelector('#show-descr-theyalow');
const descrThey = document.querySelector('#theyalow__descr');

const descTheyalow = new Description(btnDescrThey, descrThey);
descTheyalow.work();

let btnDescrRepair = document.querySelector('#show-descr-repair');
let descrRepair = document.querySelector('#repair-design-project__descr');

const descrRepairDesign = new Description(btnDescrRepair, descrRepair);
descrRepairDesign.work();

const showTheyalow = new ShowProject(
  '#theyalow',
  '#theyalow-iframe',
  '#switch-theyalow',
  '#back-theyalow',
  'mobile-theyalow'
);

showTheyalow.work();

const showRepair = new ShowProject(
  '#repair-design-project',
  '#repair-iframe',
  '#switch-repair',
  '#back-repair',
  'mobile-repair'
);

showRepair.work();
