import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Bee } from './models/bee';
import { Post } from './models/post';
import { Company } from './models/company';
import { Address } from './models/address';
import { Geo } from './models/geo';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { Todo } from './models/todo';
import { Comment } from './models/comment';
import { BeeComponent } from './components/bee/bee.component';
import { PostsComponent } from './components/posts/posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // matriz, un array de bees esta lleno de bee y bee es otro arreglo de bee
  private bees: Bee[] = [];
  isDataLoaded: boolean = false;

  private currentSelectedBee: Bee = null;

  constructor(private http: Http) {
    this.loadFromJson();
  }

  loadData(usersUrl: string, postsUrl: string, albumsUrl: string, photosUrl: string, todosUrl: string, commentsUrl: string) {
    this.http.get(usersUrl).map(res => res.json()).subscribe((data) => {

      for (var user of data) {
        let company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
        let address = new Address(user.address.street, user.address.suite, user.address.city, user.address.zipcode, new Geo
          (user.address.geo.lat, user.address.geo.lng));
        let bee = new Bee(user.id, user.name, user.username, user.email, user.phone, user.website, address
          , company, user.avatarUrl);
        this.bees.push(bee);
      }

      this.http.get(postsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let post = new Post(item.id, item.userId, item.title, item.body);
          for (var bee of this.bees) {
            if (post.getUserid() === bee.getId()) {
              bee.addPost(post);
            }
          }
        }
      });

      this.http.get(albumsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let album = new Album(item.id, item.userId, item.title);
          for (var bee of this.bees) {
            if (album.getUserid() === bee.getId()) {
              bee.setAlbum(album);
            }
          }
        }

        this.http.get(photosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl);
            for (var bee of this.bees) {
              if (photo.getAlbumId() === bee.getAlbum().getId()) {
                bee.addPhotoToAlbum(photo);
              }
            }
          }
        });

        this.http.get(todosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let todo = new Todo(item.id, item.userId, item.title, item.completed);
            for (var bee of this.bees) {
              if (todo.getUserid() === bee.getId()) {
                bee.addTodo(todo);
              }
            }
          }
        });

        this.http.get(commentsUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let comment = new Comment(item.id, item.postId, item.name, item.body, item.email);
            for (var bee of this.bees) {
              for (var post of bee.getPosts()) {
                if (post.getId() === comment.getPostId()) {
                  post.addComment(comment);
                }
              }
            }
          }
        });

      });

      //1. Agregar tu información a este usuario.
      let company = new Company('Mei shèjì.', 'A better world for everyone.', 'Dream does not cost a dine.');
      let address = new Address('Ave 2, Street 8.', 'Villas San Marino.', 'Tres Ríos.', '30303.', new Geo
        ('9.904874', '-84.010733'));
      let me = new Bee(11, 'Melanie Liang Gao.', 'Mei.', 'mliangg@ucenfotec.ac.cr', '8870-1731.', 'https://www.linkedin.com/in/melanie-liang-5399106b/', address
        , company, 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/0a1/1bb/0031343.jpg');
      let album = new Album(1000, 11, 'Mei Album');
      me.setAlbum(album);
      this.bees.push(me);

      this.currentSelectedBee = this.bees[4];
      this.isDataLoaded = true;
    });
  }

  loadFromServer() {
    //Data from: https://jsonplaceholder.typicode.com/
    this.loadData('https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/photos',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/comments');
  }

  loadFromJson() {
    this.loadData('../assets/data/users.json',
      '../assets/data/posts.json',
      '../assets/data/albums.json',
      '../assets/data/photos.json',
      '../assets/data/todos.json',
      '../assets/data/comments.json');
  }

  recieveSelectedBee(pBee: Bee) {
    console.log(pBee);

    this.currentSelectedBee = pBee;
  }
}
