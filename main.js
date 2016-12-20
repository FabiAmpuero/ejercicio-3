var sueldo, pagoHora, horasSemana;

pagoHora =prompt("Por favor, ingrese el monto de pago por hora");
horasSemana =prompt("Por favor, ingrese las horas que trabajo esta semana");

sueldo = parseFloat(pagoHora)*parseFloat(horasSemana);

alert(sueldo);