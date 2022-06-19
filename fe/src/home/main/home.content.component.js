import { HomeBanner } from "../banner/home.banner.component";
import { HomeBio } from "../bio/home.bio.component";
import { Home2Bio } from "../bio/home.bio2.component";
import { HomeBlogList } from "../blog/home.bloglist.component";
import { HomeContact } from "../contact/home.contact";
import { HomeSystem } from "../system/Home.system.component";
import { HomeTestimonials } from "../testimonials/home.testimonials.component";

export function HomeContent(){
    return (
        <>
                <HomeBanner></HomeBanner>
        <HomeSystem></HomeSystem>
        <HomeBio></HomeBio>
        <Home2Bio></Home2Bio>
        <HomeBlogList></HomeBlogList>
        <HomeTestimonials></HomeTestimonials>
        <HomeContact></HomeContact>
        </>
    )
}