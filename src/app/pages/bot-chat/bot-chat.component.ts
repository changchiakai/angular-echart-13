import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

interface ChatMessage {
  content: string;
  isUser: boolean;
  time: Date;
  type: 'text' | 'image';
  imageUrl?: string;
} 

@Component({
  selector: 'app-bot-chat',
  templateUrl: './bot-chat.component.html',
  styleUrls: ['./bot-chat.component.scss']
})
export class BotChatComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('fileInput') private fileInput!: ElementRef;
  
  isChatOpen: boolean = false;
  userInput: string = '';
  chatList: ChatMessage[] = [
    {
      content: '您好！我是客服機器人，很高興為您服務。',
      isUser: false,
      time: new Date(),
      type: 'text'
    },
    {
      content: '請問有什麼我可以幫您的嗎？',
      isUser: false,
      time: new Date(),
      type: 'text'
    }
  ];

  constructor() { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    // 添加用戶訊息
    this.chatList.push({
      content: this.userInput,
      isUser: true,
      time: new Date(),
      type: 'text'
    });

    // 模擬機器人回覆
    setTimeout(() => {
      this.chatList.push({
        content: this.getBotResponse(this.userInput),
        isUser: false,
        time: new Date(),
        type: 'text'
      });
    }, 1000);

    this.userInput = '';
  }

  private getBotResponse(userMessage: string): string {
    // 簡單的回應邏輯
    const responses = [
      '我了解您的需求，讓我為您處理。',
      '感謝您的提問，我正在查詢相關資訊。',
      '好的，我明白了。還有什麼我可以幫您的嗎？',
      '這是個好問題，讓我為您詳細說明。',
      '抱歉，我可能需要更多資訊才能幫助您。'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  handleImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.chatList.push({
          content: '',
          isUser: true,
          time: new Date(),
          type: 'image',
          imageUrl: e.target.result
        });
        
        // 模擬機器人回覆
        setTimeout(() => {
          this.chatList.push({
            content: '我收到您的圖片了！',
            isUser: false,
            time: new Date(),
            type: 'text'
          });
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  }

  openImageUpload(): void {
    this.fileInput.nativeElement.click();
  }

  handlePaste(event: ClipboardEvent): void {
    const items = event.clipboardData?.items;
    
    if (!items) return;

    // 尋找剪貼簿中的圖片
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        // 防止預設的貼上行為
        event.preventDefault();
        
        // 獲取圖片文件
        const file = items[i].getAsFile();
        
        if (file) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            // 添加圖片訊息
            this.chatList.push({
              content: '',
              isUser: true,
              time: new Date(),
              type: 'image',
              imageUrl: e.target.result
            });
            
            // 模擬機器人回覆
            setTimeout(() => {
              this.chatList.push({
                content: '我收到您貼上的圖片了！',
                isUser: false,
                time: new Date(),
                type: 'text'
              });
            }, 1000);
          };
          reader.readAsDataURL(file);
        }
        break;
      }
    }
  }

  copyMessage(content: string): void {
    // 創建一個臨時的 textarea 元素
    const textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    
    // 選中文字
    textarea.select();
    textarea.setSelectionRange(0, 99999); // 對於手機裝置
    
    // 執行複製命令
    document.execCommand('copy');
    
    // 移除臨時元素
    document.body.removeChild(textarea);
    
    // 可以添加一個提示（可選）
    alert('已複製訊息！');
  }
}
