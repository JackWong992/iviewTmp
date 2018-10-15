import Home from '@/views/Home.vue'
export default  [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu/:name',
    component: ()=> import( '@/views/argu.vue' )  
  },
  {
    path: '/parent',
    name: 'parent',
    component: ()=> import( '@/views/parent.vue' ),
    children: [
      {
        path: 'child',
        component: ()=> import( '@/views/child.vue' ),    
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: ()=>import( '@/views/child.vue' ),
      tel: ()=>import('@/views/tel.vue'),
      email: ()=>import( '@/views/email.vue' )
    }
  },
  {
    path: '/sds',
    name: 'hello',
    redirect: to=>{
      console.log(to)
    }
  }
]