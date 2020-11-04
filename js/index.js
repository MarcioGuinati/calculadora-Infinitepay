function calcula1() {

    var valorserv;
    var prim_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    prim_num = parseInt(document.getElementById('nro1').value);

    if (valorserv > 0 && prim_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * prim_num) / 100;
        resultfinal = (valorserv + resultado);
    }else{
        alert("Insira um valor maior que 0");
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1;

    //Limpa/Reseta as variaveis
    valorserv = prim_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro1').value = '';
}

function calcula2() {

    var valorserv;
    var seg_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    seg_num = parseInt(document.getElementById('nro2').value);

    if (valorserv > 0 && seg_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * seg_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = seg_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro2').value = '';
}
function calcula3() {

    var valorserv;
    var terc_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    terc_num = parseInt(document.getElementById('nro3').value);

    if (valorserv > 0 && terc_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * terc_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = terc_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro3').value = '';
}
function calcula4() {

    var valorserv;
    var quar_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    quar_num = parseInt(document.getElementById('nro4').value);

    if (valorserv > 0 && quar_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * quar_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = quar_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro4').value = '';
}
function calcula5() {

    var valorserv;
    var quint_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    quint_num = parseInt(document.getElementById('nro5').value);

    if (valorserv > 0 && quint_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * quint_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = quint_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro5').value = '';
}
function calcula6() {

    var valorserv;
    var sext_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    sext_num = parseInt(document.getElementById('nro6').value);

    if (valorserv > 0 && sext_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * sext_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = sext_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro6').value = '';
}
function calcula7() {

    var valorserv;
    var set_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    set_num = parseInt(document.getElementById('nro7').value);

    if (valorserv > 0 && set_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * set_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = set_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro7').value = '';
}
function calcula8() {

    var valorserv;
    var oito_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    oito_num = parseInt(document.getElementById('nro8').value);

    if (valorserv > 0 && oito_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * oito_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = oito_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro8').value = '';
}
function calcula9() {

    var valorserv;
    var nono_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    nono_num = parseInt(document.getElementById('nro9').value);

    if (valorserv > 0 && nono_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * nono_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = nono_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro9').value = '';
}
function calcula10() {

    var valorserv;
    var dec_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    dec_num = parseInt(document.getElementById('nro10').value);

    if (valorserv > 0 && dec_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * dec_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = dec_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro10').value = '';
}
function calcula11() {

    var valorserv;
    var decpri_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    decpri_num = parseInt(document.getElementById('nro11').value);

    if (valorserv > 0 && decpri_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * decpri_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = decpri_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro11').value = '';
}
function calcula12() {

    var valorserv;
    var decseg_num;
    var resultado;
    var operacao;
    var resultfinal;

    valorserv = parseInt(document.getElementById('valor').value);
    decseg_num = parseInt(document.getElementById('nro12').value);

    if (valorserv > 0 && decseg_num > 0) 
    {
        operacao = '/';
        resultado = (valorserv * decseg_num) / 100;
        resultfinal = (valorserv + resultado);

    }
    else
    {
        alert('Os números precisam ser maiores que 0 (zero).');
    }
    //Capturamos o elemento
    var tag_resultado = document.getElementById('resultado_calc_sem_juro');
    var tag_resultado1 = document.getElementById('resultado_calc_com_juro');

    //Montado a String de saída
    var str = 'R$' + ' ' + valorserv;
    var str1 = 'R$' + ' ' + resultfinal;

    //Injetamos a String no elemento
    tag_resultado.innerHTML = str;
    tag_resultado1.innerHTML = str1

    //Limpa/Reseta as variaveis
    valorserv = decseg_num = operacao = resultado = '';
    document.getElementById('valor').value = '';
    document.getElementById('nro12').value = '';
}