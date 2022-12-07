import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

interface NavbarItem {
	route: string;
	name: string;
}

@Component({
	selector: 'lm-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	routes: NavbarItem[] = [
		{ route: 'books', name: 'Books' },
		{ route: 'rents', name: 'Rents' },
		{ route: 'renters', name: 'Renters' },
		{ route: 'log', name: 'Log' }
	];

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.makeNavbarToggleable();
	}

	/* Makes listens to the click of burger menu, marks it as active when clicked */
	private makeNavbarToggleable(): void {
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

		$navbarBurgers.forEach((el) => {
			el.addEventListener('click', () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				el.classList.toggle('is-active');
				$target?.classList.toggle('is-active');
			});
		});
	}
}
