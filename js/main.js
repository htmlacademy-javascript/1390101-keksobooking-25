import {createOffers} from './data.js';
import { createOfferCard } from './popup.js';

const mapCanvas = document.querySelector('#map-canvas');

const cards = createOffers();
const card = createOfferCard(cards[0]);

mapCanvas.appendChild(card);
