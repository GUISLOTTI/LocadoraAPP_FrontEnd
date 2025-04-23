import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocacaoService, Locacao } from '../locacao.service';

@Component({
  selector: 'app-locacao-list',
  templateUrl: './locacao-list.component.html',
  styleUrls: ['./locacao-list.component.css'],
  standalone: false
})
export class LocacaoListComponent implements OnInit {
  locacoes: Locacao[] = [];

  constructor(
    private locacaoService: LocacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locacaoService.getLocacoes().subscribe({
      next: (data) => {
        this.locacoes = data;
        console.log('Locações carregadas:', data);
      },
      error: (err) => {
        console.error('Erro ao carregar locações:', err);
        alert('Falha ao carregar locações. Verifique o console.');
      }
    });
  }

  navigateToNew(): void {
    this.router.navigate(['/locacoes/novo']);
  }

  editLocacao(id: number): void {
    this.router.navigate([`/locacoes/editar/${id}`]);
  }

  deleteLocacao(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta locação?')) {
      this.locacaoService.deleteLocacao(id).subscribe({
        next: () => {
          this.locacoes = this.locacoes.filter(l => l.codigo !== id);
          alert('Locação excluída com sucesso.');
        },
        error: (err) => {
          console.error('Erro ao excluir locação:', err);
          alert('Falha ao excluir locação.');
        }
      });
    }
  }
}