import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Locacao {
  codigo: number;
  identificadorCarroId: number;
  identificadorUsuarioId: number;
  dataRetirada: string;
  dataDevolucao: string;
  valor: number;
  observacoes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {
  private apiUrl = 'https://localhost:7074/api/Locacoes';

  constructor(private http: HttpClient) {}

  getLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(this.apiUrl);
  }

  getLocacao(id: number): Observable<Locacao> {
    return this.http.get<Locacao>(`${this.apiUrl}/${id}`);
  }

  createLocacao(locacao: Locacao): Observable<Locacao> {
    return this.http.post<Locacao>(this.apiUrl, locacao);
  }

  updateLocacao(id: number, locacao: Locacao): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, locacao);
  }

  deleteLocacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}