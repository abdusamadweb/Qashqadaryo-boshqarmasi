import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/pages/MainPage";
import XududiyBolimlar from "@/pages/XududiyBolimlar";
import XududiyBolimlarId from "@/pages/XududiyBolimlarId";
import KasbgaOqitish from "@/pages/KasbgaOqitish";
import BoshqarmaHaqida from "@/pages/BoshqarmaHaqida";
import FaoliyatYonalishlari from "@/pages/FaoliyatYonalishlari";
import Raxbariyat from "@/pages/Raxbariyat";
import Xodimlar from "@/pages/Xodimlar";
import Malumotlar from "@/pages/Malumotlar";
import Qonunlar from "@/pages/Qonunlar";
import Xujjatlar from "@/pages/Xujjatlar";
import News from "@/pages/News";
import NewsId from "@/pages/NewsId";
import Gallery from "@/pages/Gallery";
import VGallery from "@/pages/VGallery";
import Boglanish from "@/pages/Boglanish";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/xududiy-bolimlar',
        component: XududiyBolimlar
    },
    {
        path: '/xududiy-bolimlar/:id',
        component: XududiyBolimlarId
    },
    {
        path: '/kasbga-oqitish',
        component: KasbgaOqitish
    },
    {
        path: '/boshqarma-haqida',
        component: BoshqarmaHaqida
    },
    {
        path: '/faoliyat-yonalishlari',
        component: FaoliyatYonalishlari
    },
    {
        path: '/raxbariyat',
        component: Raxbariyat
    },
    {
        path: '/xodimlar',
        component: Xodimlar
    },
    {
        path: '/malumotlar',
        component: Malumotlar
    },
    {
        path: '/qonunlar',
        component: Qonunlar
    },
    {
        path: '/xujjatlar',
        component: Xujjatlar
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/news/:id',
        component: NewsId
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/video-gallery',
        component: VGallery
    },
    {
        path: '/boglanish',
        component: Boglanish
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;