export interface Posts {
  id: number;
  yoast_head_json: {
    title: string;
    og_image:{
        0:{
            url:string;
        }
    }
  };
  link?: string;
  content?: {
    rendered: string;
  };
  excerpt:{
    rendered: string;
  }

}
