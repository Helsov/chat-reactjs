import React from 'react';

function ErrorMessage (e){
    return <h3>Произошла ошибка на сервере. Не удалось сохранить ваши данные.</h3>;
};

function SuccessMessage (e){
    return <h3>Ваши данные успешно сохранены! Сейчас вы будете перенаправлены на страницу авторизации!</h3>;
};

function Response (e) {
    const isSuccess = e.isSuccess;
    return isSuccess ? <ErrorMessage/> : <SuccessMessage/>;
}

export default Response;