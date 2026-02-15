import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const HomePage = lazy(() => import('@/features/home/HomePage'))
const AboutPage = lazy(() => import('@/features/about/AboutPage'))
const ServicesPage = lazy(() => import('@/features/services/ServicesPage'))
const WorksPage = lazy(() => import('@/features/works/WorksPage'))
const ServiceDetailsPage = lazy(
  () => import('@/features/service-details/ServiceDetailsPage'),
)
const ContactPage = lazy(() => import('@/features/contact/ContactPage'))
const BlogPage = lazy(() => import('@/features/blog/BlogPage'))
const BlogArticlePage = lazy(() => import('@/features/blog/BlogArticlePage'))
const NotFoundPage = lazy(() => import('@/features/not-found/NotFoundPage'))

export const appRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/works', element: <WorksPage /> },
  { path: '/services/:slug', element: <ServiceDetailsPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:slug', element: <BlogArticlePage /> },
  { path: '*', element: <NotFoundPage /> },
]
