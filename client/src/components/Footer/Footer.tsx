'use client';

import { Image } from '@heroui/react';
import footerSections from '@lib/data/footer.data';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className="mt-10 bg-slate-100">
			<div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
				<div className="md:flex md:justify-evenly">
					<div className="mb-14 md:mb-0">
						<a
							href="/"
							className="flex flex-col items-center justify-start h-fit mb-7 gap-y-4"
						>
							<div className="flex flex-col items-center gap-y-2">
								<div className="flex items-center gap-x-4">
									<Image
										src="/favicon.webp"
										alt="CICC Logo"
										className="size-24 md:size-32"
										width={128}
										height={128}
									/>
									<Image
										src="/pucmm.webp"
										alt="PUCMM Logo"
										className="size-24 md:size-32"
										width={128}
										height={128}
									/>
								</div>
								<div>
									<p className="text-lg font-semibold text-center md:text-3xl whitespace-nowrap text-primary">
										<span className="text-warning">Comité </span>de Estudiantes
										de
									</p>
									<p className="text-lg font-semibold text-center md:text-3xl whitespace-nowrap text-primary">
										Ingeniería en Ciencias de la{' '}
										<span className="text-warning">Computación</span>
									</p>
								</div>
							</div>
						</a>
						<div className="flex justify-center mb-20 md:mb-0">
							<a
								href="https://www.instagram.com/ciccpucmm/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-transform hover:text-gray-900 ms-5 hover:scale-105"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 256"
								>
									<title>Instagram</title>
									<path
										fill="#00589B"
										d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
									/>
								</svg>
								<span className="sr-only">Instagram page</span>
							</a>
							<a
								href="https://www.facebook.com/ciscpucmm"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-transform hover:text-gray-900 ms-5 hover:scale-105"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 36 36"
									fill="#00589B"
									height="24"
									width="24"
								>
									<title>Facebook</title>
									<defs>
										<linearGradient
											x1="50%"
											x2="50%"
											y1="97.078%"
											y2="0%"
											id="a"
										>
											<stop offset="0%" stopColor="#0062E0" />
											<stop offset="100%" stopColor="#19AFFF" />
										</linearGradient>
									</defs>
									<path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
									<path
										fill="#FFF"
										d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
									/>
								</svg>
								<span className="sr-only">Facebook page</span>
							</a>
							<a
								href="https://www.twitter.com/ciccpucmm"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-transform hover:text-gray-900 ms-5 hover:scale-105"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="#00589B"
									viewBox="0 0 1200 1227"
									stroke="#00589B"
								>
									<title>Twitter</title>
									<path
										fill="#00589B"
										d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
									/>
								</svg>
								<span className="sr-only">Twitter page</span>
							</a>
							<a
								href="https://www.linkedin.com/in/ciccpucmm/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-transform hover:text-gray-900 ms-5 hover:scale-105"
							>
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 256"
								>
									<title>LinkedIn</title>
									<path
										d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
										fill="#0A66C2"
									/>
								</svg>
								<span className="sr-only">Linkedin page</span>
							</a>
							<a
								href="https://linktr.ee/CICCPUCMM"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-transform hover:text-gray-900 ms-5 hover:scale-105"
							>
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 80 97.7"
									xmlSpace="preserve"
								>
									<title>Linktree</title>
									<path
										d="M.2 33.1h24.2L7.1 16.7l9.5-9.6L33 23.8V0h14.2v23.8L63.6 7.1l9.5 9.6L55.8 33H80v13.5H55.7L73 63.2l-9.5 9.4L40 49.1 16.5 72.7 7 63.2l17.3-16.7H0V33.1h.2zm32.9 32.7h14.2v32H33.1v-32z"
										fill="#0A66C2"
									/>
								</svg>
								<span className="sr-only">Linktree page</span>
							</a>
							<a
								href="mailto:cicc-csti@ce.pucmm.edu.do"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-transform hover:text-gray-900 ms-5 hover:scale-105"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00589B"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<title>Email</title>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								<span className="sr-only">Email</span>
							</a>
						</div>
					</div>
				</div>
				<hr className="mt-2 mb-6 border-gray-200 sm:mx-auto" />
				<div className="flex items-center justify-center mb-20 md:mb-0">
					<span className="text-sm text-black sm:text-center">
						Copyright © {CURRENT_YEAR}
						<a href="/" className="transition-colors hover:text-primary">
							CICC
						</a>
						.
					</span>
				</div>
			</div>
		</footer>
	);
}
