// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import AppLayout from 'src/layouts/AppLayout'
import PrelineLayout from 'src/layouts/PrelineLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import TestLayout from 'src/layouts/TestLayout'

import { useAuth } from './auth'
import TailwindLayout from './layouts/TailwindLayout/TailwindLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={PrelineLayout}>
        <Route path="/preline" page={PrelinePage} name="preline" />
      </Set>
      <Set wrap={TestLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/demo" page={DemoPage} name="demo" />
        <Route path="/grid" page={GridPage} name="grid" />

        <Route path="/rqHome" page={RQHomePage} name="rqhome" />
        <Route path="/rq-home" page={RQHomePage} name="rqHome" />
        <Route path="/rq-superheroes" page={RQSuperheroesPage} name="rqSuperheroes" />
        <Route path="/superheroes" page={SuperheroesPage} name="superheroes" />
        <Private unauthenticated="superheroes">
          <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
            <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
            <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
            <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
            <Route path="/admin/posts" page={PostPostsPage} name="posts" />
          </Set>
        </Private>
      </Set>

      <Set wrap={AppLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/sidepanel" page={SidepanelPage} name="sidepanel" />
        <Route path="/upload" page={UploadPage} name="upload" />
        <Route path="/shop" page={ShopPage} name="shop" />
      </Set>
      <Set wrap={TailwindLayout}>
        <Route path="/tailwind" page={TailwindPage} name="tailwind" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
