var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Teste_Aplicacao',
  description: 'Teste de um servidor',
  script: 'C:\\Users\\basiv\OneDrive\\Área de Trabalho\\curso_html\\JS_BR\\node\\projeto\\src\\service.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();