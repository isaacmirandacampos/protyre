'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Funções de máscara
const maskCNPJ = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18);
};

const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
};

const maskCEP = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2')
    .slice(0, 9);
};

const maskDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .slice(0, 10);
};

export default function DistributorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cepLoading, setCepLoading] = useState(false);

  const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      setCepLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          const form = e.target.form;
          if (form) {
            (form.elements.namedItem('estado') as HTMLSelectElement).value = data.uf;
            (form.elements.namedItem('cidade') as HTMLInputElement).value = data.localidade;
            (form.elements.namedItem('bairro') as HTMLInputElement).value = data.bairro;
            (form.elements.namedItem('logradouro') as HTMLInputElement).value = data.logradouro;
          }
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      } finally {
        setCepLoading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/distributor-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
      <div className="bg-[#E7EEE5] rounded-2xl shadow-xl p-8 md:p-10">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Formulário enviado com sucesso! Entraremos em contato em breve.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Erro ao enviar formulário. Por favor, tente novamente.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dados da Empresa */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Dados da Empresa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Razão Social<span className="text-red-500">*</span>
                </label>
                <input
                  name="razaoSocial"
                  type="text"
                  required
                  placeholder="Razão social da empresa"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Nome Fantasia<span className="text-red-500">*</span>
                </label>
                <input
                  name="nomeFantasia"
                  type="text"
                  required
                  placeholder="Nome fantasia da empresa"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Inscrição Estadual (IE)
                </label>
                <input
                  name="inscricaoEstadual"
                  type="text"
                  placeholder='000.000.000.000 (ou "Isento")'
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  CNPJ<span className="text-red-500">*</span>
                </label>
                <input
                  name="cnpj"
                  type="text"
                  required
                  placeholder="00.000.000/0000-00"
                  onChange={(e) => {
                    e.target.value = maskCNPJ(e.target.value);
                  }}
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Ramo de Atividade<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="ramoAtividade"
                    required
                    className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">Selecione o ramo de atuação</option>
                    <option value="varejo">Varejo</option>
                    <option value="atacado">Atacado</option>
                    <option value="oficina">Oficina Mecânica</option>
                    <option value="revenda">Revenda de Pneus</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Data de Fundação<span className="text-red-500">*</span>
                </label>
                <input
                  name="dataFundacao"
                  type="text"
                  required
                  placeholder="dd/mm/aaaa"
                  onChange={(e) => {
                    e.target.value = maskDate(e.target.value);
                  }}
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Dados de Contato */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Dados de contato
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Telefone com DDD<span className="text-red-500">*</span>
                </label>
                <input
                  name="telefone"
                  type="text"
                  required
                  placeholder="(00) 00000-0000"
                  onChange={(e) => {
                    e.target.value = maskPhone(e.target.value);
                  }}
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Digite seu e-mail"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Confirmação de e-mail<span className="text-red-500">*</span>
                </label>
                <input
                  name="emailConfirmacao"
                  type="email"
                  required
                  placeholder="Confirme seu e-mail"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Site
                </label>
                <input
                  name="site"
                  type="text"
                  placeholder="Cole aqui o link"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Rede Social
                </label>
                <input
                  name="redeSocial"
                  type="text"
                  placeholder="Cole aqui o link"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Endereço
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  CEP<span className="text-red-500">*</span>
                </label>
                <input
                  name="cep"
                  type="text"
                  required
                  placeholder="00000-000"
                  onChange={(e) => {
                    e.target.value = maskCEP(e.target.value);
                  }}
                  onBlur={handleCepBlur}
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                {cepLoading && (
                  <span className="text-xs text-gray-500">Buscando CEP...</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Estado<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="estado"
                    required
                    className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">Selecione o estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Cidade<span className="text-red-500">*</span>
                </label>
                <input
                  name="cidade"
                  type="text"
                  required
                  placeholder="Informe a cidade"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Bairro<span className="text-red-500">*</span>
                </label>
                <input
                  name="bairro"
                  type="text"
                  required
                  placeholder="Informe o bairro"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Logradouro<span className="text-red-500">*</span>
                </label>
                <input
                  name="logradouro"
                  type="text"
                  required
                  placeholder="Rua / Avenida"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Nº<span className="text-red-500">*</span>
                </label>
                <input
                  name="numero"
                  type="text"
                  required
                  placeholder="000"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-700 font-semibold">
                  Complemento
                </label>
                <input
                  name="complemento"
                  type="text"
                  placeholder="Opcional"
                  className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Checkbox e Botão */}
          <div className="space-y-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                name="aceitarPoliticas"
                type="checkbox"
                required
                className="w-5 h-5 rounded border-gray-300 focus:ring-green-500 cursor-pointer"
                style={{ accentColor: '#00AA0E' }}
              />
              <span className="text-sm text-gray-600">
                Li e aceito as{' '}
                <a href="#" className="underline">
                  Políticas de Privacidade
                </a>{' '}
                e{' '}
                <a href="#" className="underline">
                  Políticas de Cookies
                </a>
                .
              </span>
            </label>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 hover:bg-green-500/90 hover:text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar cadastro para ser um distribuidor'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
