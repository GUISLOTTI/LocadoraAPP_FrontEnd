import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Carro {
  codigo: number;
  identificadorCarro: string;
  ano: number;
  cor: string;
  descricaoCarro: string;
  observacoes: string;
  referenciaModeloId: number;
  referenciaModelo: any;
}

export interface Usuario {
  codigo: number;
  identificadorUsuario: string;
  nome: string;
  email: string;
  senha: string;
}

export interface Locacao {
  codigo: number;
  identificadorCarroId: number;
  identificadorCarro: Carro;
  identificadorUsuarioId: number;
  identificadorUsuario: Usuario;
  dataRetirada: string;
  dataDevolucao: string;
  valor: number;
  observacoes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {
  private apiUrl = 'https://localhost:7074/api';

  constructor(private http: HttpClient) {}

  getLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(`${this.apiUrl}/Locacoes`);
  }

  getLocacao(id: number): Observable<Locacao> {
    return this.http.get<Locacao>(`${this.apiUrl}/Locacoes/${id}`);
  }

  createLocacao(locacao: Locacao): Observable<Locacao> {
    return this.http.post<Locacao>(`${this.apiUrl}/Locacoes`, locacao);
  }

  updateLocacao(id: number, locacao: Locacao): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Locacoes/${id}`, locacao);
  }

  deleteLocacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Locacoes/${id}`);
  }

  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.apiUrl}/Carros`);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/Usuarios`);
  }
}