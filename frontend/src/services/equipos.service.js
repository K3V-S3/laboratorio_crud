import { api } from './api';

function toFormData(data) {
    const formData = new FormData();
    formData.append('nombre', data.nombre || '');
    formData.append('marca', data.marca || '');
    formData.append('modelo', data.modelo || '');

    if/}