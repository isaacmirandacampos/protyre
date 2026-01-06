'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitDistributorForm(formData: FormData) {
  try {
    const data = {
      razaoSocial: formData.get('razaoSocial') as string,
      nomeFantasia: formData.get('nomeFantasia') as string,
      inscricaoEstadual: formData.get('inscricaoEstadual') as string,
      cnpj: formData.get('cnpj') as string,
      ramoAtividade: formData.get('ramoAtividade') as string,
      dataFundacao: formData.get('dataFundacao') as string,
      telefone: formData.get('telefone') as string,
      email: formData.get('email') as string,
      site: formData.get('site') as string,
      redeSocial: formData.get('redeSocial') as string,
      cep: formData.get('cep') as string,
      estado: formData.get('estado') as string,
      cidade: formData.get('cidade') as string,
      bairro: formData.get('bairro') as string,
      logradouro: formData.get('logradouro') as string,
      numero: formData.get('numero') as string,
      complemento: formData.get('complemento') as string,
    };

    const htmlContent = `
      <h1>Nova solicitação de contato via site da Protyre</h1>

      <h2>Dados da Empresa</h2>
      <ul>
        <li><strong>Razão Social:</strong> ${data.razaoSocial}</li>
        <li><strong>Nome Fantasia:</strong> ${data.nomeFantasia}</li>
        <li><strong>Inscrição Estadual:</strong> ${data.inscricaoEstadual || 'Não informado'}</li>
        <li><strong>CNPJ:</strong> ${data.cnpj}</li>
        <li><strong>Ramo de Atividade:</strong> ${data.ramoAtividade}</li>
        <li><strong>Data de Fundação:</strong> ${data.dataFundacao}</li>
      </ul>

      <h2>Dados de Contato</h2>
      <ul>
        <li><strong>Telefone:</strong> ${data.telefone}</li>
        <li><strong>E-mail:</strong> ${data.email}</li>
        <li><strong>Site:</strong> ${data.site || 'Não informado'}</li>
        <li><strong>Rede Social:</strong> ${data.redeSocial || 'Não informado'}</li>
      </ul>

      <h2>Endereço</h2>
      <ul>
        <li><strong>CEP:</strong> ${data.cep}</li>
        <li><strong>Estado:</strong> ${data.estado}</li>
        <li><strong>Cidade:</strong> ${data.cidade}</li>
        <li><strong>Bairro:</strong> ${data.bairro}</li>
        <li><strong>Logradouro:</strong> ${data.logradouro}</li>
        <li><strong>Número:</strong> ${data.numero}</li>
        <li><strong>Complemento:</strong> ${data.complemento || 'Não informado'}</li>
      </ul>
    `;

    const { error } = await resend.emails.send({
      from: 'Protyre Website <onboarding@resend.dev>',
      to: 'isaacdmcampos@gmail.com',
      subject: 'Cliente solicitando contato via site da Protyre',
      html: htmlContent,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error processing form:', error);
    return { success: false, error: 'Erro ao processar formulário' };
  }
}
