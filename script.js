function exibirExemploHTML() {
    const exemploHTML = `
        <pre>
&lt;html&gt;
    &lt;head&gt;&lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Título da Página&lt;/h1&gt;
        &lt;p&gt;Este é um exemplo de conteúdo HTML.&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;
        </pre>
    `;
    document.getElementById('exemploHTML').innerHTML = exemploHTML;
}

function exibirExemploCSS() {
    const exemploCSS = `
        <pre>
body {
    background-color: #f4f4f4;
    color: #333;
}
h1 {
    color: green;
}
        </pre>
    `;
    document.getElementById('exemploCSS').innerHTML = exemploCSS;
}

function exibirExemploJS() {
    const exemploJS = `
        <pre>
function saudar() {
    alert("Olá, bem-vindo ao site!");
}
        </pre>
    `;
    document.getElementById('exemploJS').innerHTML = exemploJS;
}

function verificarRespostas() {
    const respostasCorretas = {
        q1: 'b',
        q2: 'b',
        q3: 'c',
        q4: 'c',
        q5: 'a',
        q6: 'b',
        q7: 'c',
        q8: 'b',
        q9: 'c',
        q10: 'b'
    };

    let respostasUsuario = {
        q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : null,
        q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : null,
        q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : null,
        q4: document.querySelector('input[name="q4"]:checked') ? document.querySelector('input[name="q4"]:checked').value : null,
        q5: document.querySelector('input[name="q5"]:checked') ? document.querySelector('input[name="q5"]:checked').value : null,
        q6: document.querySelector('input[name="q6"]:checked') ? document.querySelector('input[name="q6"]:checked').value : null,
        q7: document.querySelector('input[name="q7"]:checked') ? document.querySelector('input[name="q7"]:checked').value : null,
        q8: document.querySelector('input[name="q8"]:checked') ? document.querySelector('input[name="q8"]:checked').value : null,
        q9: document.querySelector('input[name="q9"]:checked') ? document.querySelector('input[name="q9"]:checked').value : null,
        q10: document.querySelector('input[name="q10"]:checked') ? document.querySelector('input[name="q10"]:checked').value : null
    };

    let resultado = 0;
    for (let pergunta in respostasCorretas) {
        if (respostasUsuario[pergunta] === respostasCorretas[pergunta]) {
            resultado++;
        }
    }

    document.getElementById('resultado').innerHTML = `<p>Você acertou ${resultado} de 10 perguntas.</p>`;
}
