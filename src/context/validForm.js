export const hasName = (nome) => {
    var regName = /^[A-Z][a-z].* [A-Z][a-z]+$/;
    return regName.test(nome)
}

export const hasDescription = (descricao) => {
    return descricao == undefined || descricao == ''
}

export const hasEndereco = (endereco) => {
    const regexEndereco = /^([A-Za-z]+\s[A-Za-z]+),\s([A-Za-z]{2})\s-\s\d+$/;
    return regexEndereco.test(endereco);
};


export const hasEmail = (email) => {
    var regEmail = /\S+@\S+\.\S+/;
    return regEmail.test(email)
}

export const hasPhone = (phone) => {
    var regPhone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
    return regPhone.test(phone)
}

export const hasCnpj = (cnpj) => {
    const regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return regexCnpj.test(cnpj);
}

export const hasCpf = (cpf) => {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return regexCpf.test(cpf);
}

export const hasDateOfBirth = (dateOfBirth) => {
    const regexDateOfBirth = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexDateOfBirth.test(dateOfBirth);
}

export const hasPassword = (password) => {
    if (password == undefined) {
        return false
    }

    return password.length >= 6;
}

export const hasVehicle = (vehicle) => {
    if (vehicle == undefined) {
        return false
    }

    return vehicle.length >= 7;
}

export const hasCnh = (cnh) => {
    if (cnh == undefined) {
        return false
    }

    return cnh.length >= 7;
}

export const hasCep = (cep) => {
    const regexCep = /^\d{5}-\d{3}$/;
    return regexCep.test(cep);
};
