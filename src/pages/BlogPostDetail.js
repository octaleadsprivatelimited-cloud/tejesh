import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/blogPosts';
import { NotFound } from '../components/SiteLayout';
import { PageIntro, EnquiryCTA } from '../components/Editorial';
export default function BlogPostDetail() { const {id} = useParams(); const post = posts.find(p => String(p.id) === id); if (!post) return <NotFound />; return <><PageIntro eyebrow={post.category} title={post.title}><p>{post.author} · {post.readTime}</p><Link className="text-link" to="/blog">All journal articles</Link></PageIntro><article className="container reading section blog-content section-panel" dangerouslySetInnerHTML={{__html:post.content}} /><EnquiryCTA /></>; }
