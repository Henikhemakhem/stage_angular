import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from '../../services/course-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  formationId!: string;
  courses: any[] = [];
  titleform!: string;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseServiceService,
    private sanitizer: DomSanitizer,
    private formservice: FormationService,
  ) {}

  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['id'];
    this.loadCourses();
    this.formservice.getFormationbyId(this.formationId).subscribe((x) => {
      this.titleform = x.category;
    });
  }

  loadCourses(): void {
    this.courseService.getCoursesByFormationId(this.formationId).subscribe(
      (data: any[]) => {
        this.courses = data.map(course => ({
          ...course,
          showVideos: false,
          videos: course.videos.map((video: any) => ({
            ...video,
            safeUrl: this.getSafeVideoUrl(video.url)
          }))
        }));
      },
      (error) => {
        console.error('Error loading courses:', error);
      }
    );
  }

  showVideos(course: any): void {
    course.showVideos = true; // Affiche les vidéos
  }

  hideVideos(course: any): void {
    course.showVideos = false; // Masque les vidéos
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  isYouTubeVideo(video: any): boolean {
    return video.url.includes('youtu.be') || video.url.includes('youtube.com');
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.getYouTubeVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getYouTubeVideoId(url: string): string | null {
    const youtubeRegex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?/]+)/;
    const match = url.match(youtubeRegex);
    return match && match[1];
  }

  deleteCourse(id: string): void {
    this.courseService.deleteCourse(id).subscribe(
      () => {
        this.courses = this.courses.filter(course => course._id !== id);
        console.log(`Course with id ${id} deleted successfully.`);
      },
      (error) => {
        console.error(`Error deleting course with id ${id}:`, error);
      }
    );
  }
}
