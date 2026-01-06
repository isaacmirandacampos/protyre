import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      razaoSocial,
      nomeFantasia,
      inscricaoEstadual,
      cnpj,
      ramoAtividade,
      dataFundacao,
      telefone,
      email,
      site,
      redeSocial,
      cep,
      estado,
      cidade,
      bairro,
      logradouro,
      numero,
      complemento,
    } = body;

    const htmlContent = `
      <h1>Nova solicitação de contato via site da Protyre</h1>

      <h2>Dados da Empresa</h2>
      <ul>
        <li><strong>Razão Social:</strong> ${razaoSocial}</li>
        <li><strong>Nome Fantasia:</strong> ${nomeFantasia}</li>
        <li><strong>Inscrição Estadual:</strong> ${inscricaoEstadual || 'Não informado'}</li>
        <li><strong>CNPJ:</strong> ${cnpj}</li>
        <li><strong>Ramo de Atividade:</strong> ${ramoAtividade}</li>
        <li><strong>Data de Fundação:</strong> ${dataFundacao}</li>
      </ul>

      <h2>Dados de Contato</h2>
      <ul>
        <li><strong>Telefone:</strong> ${telefone}</li>
        <li><strong>E-mail:</strong> ${email}</li>
        <li><strong>Site:</strong> ${site || 'Não informado'}</li>
        <li><strong>Rede Social:</strong> ${redeSocial || 'Não informado'}</li>
      </ul>

      <h2>Endereço</h2>
      <ul>
        <li><strong>CEP:</strong> ${cep}</li>
        <li><strong>Estado:</strong> ${estado}</li>
        <li><strong>Cidade:</strong> ${cidade}</li>
        <li><strong>Bairro:</strong> ${bairro}</li>
        <li><strong>Logradouro:</strong> ${logradouro}</li>
        <li><strong>Número:</strong> ${numero}</li>
        <li><strong>Complemento:</strong> ${complemento || 'Não informado'}</li>
      </ul>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Protyre Website <onboarding@resend.dev>',
      to: 'isaacdmcampos@gmail.com',
      subject: 'Cliente solicitando contato via site da Protyre',
      html: htmlContent,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
