# Docker من الصفر للاحتراف: الدليل الشامل لمطوّر MERN

دليل نظري وعملي كامل: هتفهم Docker من جوّه، وتشغّل مشروع MERN كامل بأمر واحد، وتعرف امتى تستخدمه وامتى لأ.

## ليه محتاج تتعلم Docker أصلاً؟

أكيد مرّ عليك الموقف ده: بتشتغل على مشروع Node.js، كله تمام على جهازك، وبعد ما تبعته لزميلك أو ترفعه على السيرفر يقولك: "مش شغال عندي!". السبب غالباً واحد من دول:

- إصدار Node مختلف (انت على 20 وهو على 16).
- MongoDB مش متثبّتة عنده أو إصدارها مختلف.
- متغيرات البيئة (Environment Variables) ناقصة.
- نظام التشغيل مختلف (Windows عندك وLinux على السيرفر).
- مكتبة بتتبني (build) بشكل مختلف على كل نظام.

الجملة المشهورة اللي كل مطوّر قالها: **"It works on my machine"**. الـ Docker اتعمل عشان يحل المشكلة دي من جذورها: بدل ما تبعت الكود بس وتقول لزميلك "ظبّط بيئتك بنفسك"، انت بتبعت **الكود + البيئة كلها** في صندوق واحد جاهز يشتغل زي ما هو في أي مكان.

وبالنسبة لمطوّر MERN بالذات، Docker بيديك:

1. **تجهيز بيئة التطوير في دقيقة**: MongoDB + Express + React + Node بأمر واحد بدل تثبيت وإعداد كل واحدة.
2. **تطابق كامل بين التطوير والإنتاج**: اللي اشتغل عندك هو نفسه اللي هيشتغل على السيرفر.
3. **تشغيل أكتر من مشروع بإصدارات مختلفة** بدون تعارض (مشروع قديم على Node 14 وجديد على Node 22 جنب بعض).
4. **onboarding سريع**: أي مطوّر جديد في الفريق بيعمل `git clone` ثم `docker compose up` ويشتغل.
5. **نشر سهل** على أي سيرفر أو سحابة (AWS, Azure, DigitalOcean, Railway...).
6. **مهارة مطلوبة في سوق العمل**: أغلب إعلانات الوظايف دلوقتي بتذكر Docker.

## يعني إيه Docker؟

**Docker** هو منصة مفتوحة المصدر بتخليك تحزّم التطبيق مع كل اللي محتاجه عشان يشتغل (الكود، الـ runtime، المكتبات، الإعدادات) في وحدة معزولة اسمها **Container**.

تخيّل الموضوع زي **حاويات الشحن** في الموانئ: مهما كان اللي جواها (أجهزة، أكل، عربيات)، الحاوية شكلها موحّد، فالسفينة والرافعة والقطر كلهم يتعاملوا معاها بنفس الطريقة. Docker عمل نفس الفكرة للبرمجيات: مهما كان تطبيقك (Node, Python, Java)، الـ Container شكله موحّد وبيشتغل على أي جهاز عليه Docker.

### الفرق بين الـ Container والـ Virtual Machine

كتير بيفتكروا إن Container هو "VM خفيفة"، وده تبسيط مفيد بس مش دقيق. الفرق الحقيقي:

| وجه المقارنة | Virtual Machine | Docker Container |
| --- | --- | --- |
| العزل | نظام تشغيل كامل لكل VM (Kernel خاص بيها) | بتشارك نفس الـ Kernel بتاع الجهاز، وعزل على مستوى العمليات |
| الحجم | غالباً جيجابايتات | غالباً ميجابايتات (ممكن 50-200MB) |
| وقت التشغيل | دقائق | ثواني أو أقل |
| استهلاك الموارد | عالي (RAM وCPU لنظام كامل) | منخفض جداً |
| العدد على جهاز واحد | عدد قليل (3-5 مثلاً) | عشرات أو مئات |
| الأمان والعزل | عزل أقوى (Hypervisor) | عزل جيد لكن أضعف نظرياً لأن الـ Kernel مشترك |
| الاستخدام الأنسب | تشغيل أنظمة تشغيل مختلفة، عزل أمني عالي | تشغيل التطبيقات والخدمات (Microservices) |

**الخلاصة:** الـ VM بتحاكي **جهاز كامل**، أما الـ Container فبيحاكي **بيئة تشغيل للتطبيق** فقط وبيستفيد من نظام التشغيل الموجود. عشان كده هو أخف وأسرع بكتير.

## المفاهيم الأساسية اللي لازم تفهمها

قبل أي أوامر، لازم تفهم 6 مصطلحات. لو فهمتهم، الباقي سهل جداً.

### 1. الـ Image (الصورة)

الـ **Image** هي **القالب الجاهز (Template) للقراءة فقط** اللي فيه كل حاجة التطبيق محتاجها: نظام ملفات مصغّر، Node.js، الكود، المكتبات. تقدر تقول عليها "الوصفة" أو "الـ class" في البرمجة الكائنية. الـ Image **مش بتشتغل**، هي مجرد تعريف.

### 2. الـ Container (الحاوية)

الـ **Container** هو **نسخة شغّالة** من الـ Image. زي ما الـ object هو instance من الـ class. تقدر تشغّل 10 containers من نفس الـ Image، وكل واحد معزول عن التاني.

> الـ Image = الوصفة. الـ Container = الأكلة اللي طلعت من الوصفة.

### 3. الـ Dockerfile

ملف نصي فيه **تعليمات خطوة بخطوة** لبناء الـ Image. بتكتب فيه: ابدأ من أنهي Image أساسية، انسخ الكود، ثبّت المكتبات، شغّل أنهي أمر. وبعدين `docker build` بيقرأه ويطلّع Image.

### 4. الـ Registry (المستودع)

مكان بيتخزن فيه الـ Images ويتشاركوا. أشهرهم **Docker Hub** (زي GitHub بس للـ Images). فيه كمان GitHub Container Registry وAWS ECR وGoogle Artifact Registry. لما بتكتب `docker pull node:22`، Docker بيجيب الـ Image من Docker Hub.

### 5. الـ Volume (وحدة التخزين)

الـ Container **مؤقت بطبيعته**: لما تمسحه، كل اللي اتكتب جواه بيضيع. الـ **Volume** هو مكان تخزين **دائم** خارج الـ Container بيفضل موجود حتى لو مسحت الـ Container. ده ضروري لقواعد البيانات زي MongoDB.

### 6. الـ Network (الشبكة)

بتخلّي الـ Containers تتكلم مع بعض. مثلاً الـ backend container يتصل بـ MongoDB container باسمه (`mongo`) بدل عنوان IP.

### معمارية Docker: مين بيعمل إيه؟

Docker شغّال بنظام **Client-Server**:

```
┌─────────────┐   أوامر (docker run, build...)   ┌──────────────────┐
│ Docker CLI  │ ───────────────────────────────▶ │  Docker Daemon   │
│  (Client)   │                                  │   (dockerd)      │
└─────────────┘                                  │                  │
                                                 │  ┌────────────┐  │
                                                 │  │ Containers │  │
                                                 │  └────────────┘  │
                                                 │  ┌────────────┐  │
                                                 │  │   Images   │  │
                                                 │  └────────────┘  │
                                                 └────────┬─────────┘
                                                          │ pull / push
                                                          ▼
                                                 ┌──────────────────┐
                                                 │ Registry         │
                                                 │ (Docker Hub)     │
                                                 └──────────────────┘
```

- **Docker CLI**: الأداة اللي بتكتب فيها الأوامر في الـ terminal.
- **Docker Daemon (dockerd)**: الخدمة اللي شغّالة في الخلفية، وهي اللي فعلاً بتبني الـ Images وتشغّل الـ Containers وتدير الـ Volumes والـ Networks.
- **Registry**: مكان تحميل ورفع الـ Images.

### إزاي الـ Image بتتكوّن: فكرة الـ Layers

ده من أهم المفاهيم اللي هتفرق معاك في الأداء. الـ Image **مش ملف واحد**، دي **طبقات (Layers)** متراصة فوق بعض، وكل تعليمة في الـ Dockerfile بتعمل طبقة جديدة **للقراءة فقط**:

```
┌──────────────────────────────────────┐
│ طبقة قابلة للكتابة (Container Layer) │  ← بتتمسح مع الـ Container
├──────────────────────────────────────┤
│ CMD ["node", "server.js"]           │
├──────────────────────────────────────┤
│ COPY . .   (كود التطبيق)             │
├──────────────────────────────────────┤
│ RUN npm install (المكتبات)           │
├──────────────────────────────────────┤
│ COPY package*.json ./                │
├──────────────────────────────────────┤
│ WORKDIR /app                         │
├──────────────────────────────────────┤
│ FROM node:22-alpine (الصورة الأساسية)│
└──────────────────────────────────────┘
   كل الطبقات دي للقراءة فقط (Read-only)
```

فايدة الـ Layers:

1. **الـ Cache**: لو طبقة ماتغيّرتش، Docker بيستخدم النسخة المخزّنة بدل ما يعيد بنائها، وده بيخلّي الـ build التاني سريع جداً.
2. **المشاركة**: لو عندك 5 Images كلهم على `node:22-alpine`، الطبقة دي بتتخزن مرة واحدة بس على جهازك.

القاعدة الذهبية: **لو طبقة اتغيّرت، كل الطبقات اللي بعدها بتتبني من جديد**. عشان كده ترتيب الأوامر في الـ Dockerfile مهم جداً، وهنشوف ده بالتفصيل.

## تثبيت Docker

**على Windows وmacOS:** نزّل **Docker Desktop** من الموقع الرسمي `docker.com` وثبّته زي أي برنامج. على Windows هتحتاج تفعّل **WSL 2** (التثبيت بيرشدك). Docker Desktop بيجي معاه كل حاجة: Engine وCLI وCompose وواجهة رسومية.

**على Linux (مثال Ubuntu):** الأسهل تستخدم سكريبت التثبيت الرسمي أو تتبع خطوات التوثيق الرسمي للتوزيعة بتاعتك:

```bash
# تثبيت سريع للتجربة والتطوير (للإنتاج راجع التوثيق الرسمي)
curl -fsSL https://get.docker.com | sh

# عشان تشغّل docker بدون sudo
sudo usermod -aG docker $USER
# اعمل logout ثم login عشان التغيير يشتغل
```

تأكد إن كل حاجة تمام:

```bash
docker --version
docker compose version
docker run hello-world
```

لو ظهرت رسالة "Hello from Docker!" يبقى كده انت جاهز.

## أوامر Docker الأساسية

خلينا نتعلم بالتجربة. هنشغّل سيرفر **Nginx** بأمر واحد:

```bash
docker run -d -p 8080:80 --name my-nginx nginx
```

افتح المتصفح على `http://localhost:8080` وهتلاقي صفحة Nginx الترحيبية. من غير ما تثبّت Nginx على جهازك!

إيه اللي حصل؟

- `docker run`: أنشئ Container وشغّله.
- `-d` (detached): شغّله في الخلفية.
- `-p 8080:80`: **Port mapping**، يعني بورت 8080 على جهازك يوصل لبورت 80 جوه الـ Container. الصيغة دايماً `بورت-جهازك:بورت-الـContainer`.
- `--name my-nginx`: اسم للـ Container بدل الاسم العشوائي.
- `nginx`: اسم الـ Image. لو مش موجودة على جهازك، Docker بيحمّلها من Docker Hub تلقائياً.

### أوامر إدارة الـ Containers

```bash
docker ps                    # الـ Containers الشغّالة حالياً
docker ps -a                 # كل الـ Containers (حتى المتوقفة)
docker stop my-nginx         # إيقاف (بشكل لطيف)
docker start my-nginx        # تشغيل Container متوقف
docker restart my-nginx      # إعادة تشغيل
docker rm my-nginx           # حذف Container متوقف
docker rm -f my-nginx        # حذف إجباري حتى لو شغّال
docker logs my-nginx         # عرض اللوجات
docker logs -f my-nginx      # متابعة اللوجات لحظياً (زي tail -f)
docker exec -it my-nginx sh  # الدخول جوه الـ Container بـ terminal
docker inspect my-nginx      # كل التفاصيل (IP, Volumes, Env...)
docker stats                 # استهلاك CPU وRAM لحظياً
```

أمر `docker exec -it ... sh` هتستخدمه كتير في الـ debugging: بيدخلك جوه الـ Container وانت شغّال، زي ما تعمل SSH على سيرفر صغير.

### أوامر إدارة الـ Images

```bash
docker images                # الـ Images الموجودة على جهازك
docker pull node:22-alpine   # تحميل Image من Docker Hub
docker rmi nginx             # حذف Image
docker build -t my-app:1.0 . # بناء Image من Dockerfile في المجلد الحالي
docker tag my-app:1.0 user/my-app:1.0   # إعطاء اسم/Tag جديد
docker push user/my-app:1.0  # رفع Image على Docker Hub
```

### أوامر التنظيف

مع الوقت Docker بيجمّع Images وContainers قديمة وبتاخد مساحة كبيرة:

```bash
docker system df             # كام مساحة Docker واخدة
docker container prune       # حذف كل الـ Containers المتوقفة
docker image prune           # حذف الـ Images غير المستخدمة (dangling)
docker image prune -a        # حذف كل Image مش مستخدمة
docker volume prune          # حذف الـ Volumes غير المستخدمة (انتبه!)
docker system prune          # تنظيف شامل (بدون Volumes افتراضياً)
```

> **تنبيه:** `docker volume prune` بيمسح بيانات حقيقية. ماتشغّلوش على جهاز فيه قاعدة بيانات مهمة قبل ما تتأكد.

### أهم الـ Flags في `docker run`

| الـ Flag | معناه | مثال |
| --- | --- | --- |
| `-d` | تشغيل في الخلفية | `docker run -d nginx` |
| `-it` | تفاعلي مع terminal | `docker run -it ubuntu bash` |
| `-p` | ربط البورتات | `-p 3000:3000` |
| `--name` | تسمية الـ Container | `--name api` |
| `-e` | متغير بيئة | `-e NODE_ENV=production` |
| `-v` | ربط Volume أو مجلد | `-v mydata:/data/db` |
| `--rm` | حذف الـ Container تلقائياً عند إيقافه | `docker run --rm node:22 node -v` |
| `--network` | تحديد الشبكة | `--network my-net` |
| `--restart` | سياسة إعادة التشغيل | `--restart unless-stopped` |

مثال مفيد: تجرّب أي إصدار Node من غير ما تثبته:

```bash
docker run --rm node:22-alpine node -v
docker run --rm node:16-alpine node -v
```

## الـ Dockerfile بالتفصيل

ده قلب الموضوع. الـ Dockerfile هو اللي بتعرّف بيه الـ Image بتاعتك. أهم التعليمات:

| التعليمة | وظيفتها |
| --- | --- |
| `FROM` | الـ Image الأساسية اللي هتبني عليها. لازم تبقى أول تعليمة |
| `WORKDIR` | تحديد مجلد العمل جوه الـ Container (بيتعمل لو مش موجود) |
| `COPY` | نسخ ملفات من جهازك للـ Image |
| `RUN` | تنفيذ أمر **وقت بناء** الـ Image (مثلاً `npm install`) |
| `ENV` | تعريف متغير بيئة |
| `ARG` | متغير متاح **وقت البناء فقط** |
| `EXPOSE` | توثيق البورت اللي التطبيق بيشتغل عليه (للتوضيح فقط، مش بيفتح البورت فعلياً) |
| `USER` | تحديد المستخدم اللي هيشغّل التطبيق (أمان) |
| `CMD` | الأمر الافتراضي **وقت تشغيل** الـ Container |
| `ENTRYPOINT` | الأمر الثابت اللي بيشتغل دايماً، وCMD بتبقى arguments ليه |
| `HEALTHCHECK` | أمر يفحص إن التطبيق شغّال سليم |

### فروق مهمة بيتلخبط فيها المبتدئين

**`RUN` مقابل `CMD`:** الـ `RUN` بيتنفذ مرة واحدة وقت **البناء** ونتيجته بتتحفظ في طبقة. أما `CMD` فبيتنفذ كل مرة **تشغّل** Container.

**`COPY` مقابل `ADD`:** الاتنين ينسخوا ملفات، لكن `ADD` بيفك ضغط ملفات tar وبيحمّل من URL. الأفضل دايماً تستخدم `COPY` لأنه أوضح وأأمن، ولا تستخدم `ADD` إلا لو محتاج مميزاته.

**`CMD` مقابل `ENTRYPOINT`:** لو عايز الـ Container يتصرف كأنه برنامج ثابت، استخدم `ENTRYPOINT`. لو عايز أمر افتراضي ممكن المستخدم يستبدله بسهولة (`docker run image otherCommand`)، استخدم `CMD`. أغلب تطبيقات الويب كفاية معاها `CMD`.

**شكل الـ exec مقابل الـ shell:** الأفضل تكتب CMD بصيغة المصفوفة `CMD ["node", "server.js"]` (exec form) لأنها بتخلّي Node يستقبل إشارات الإيقاف (SIGTERM) بشكل صحيح، عكس صيغة النص `CMD node server.js`.

### مثال أول: Dockerize لـ Express API

افترض عندك مشروع backend بالشكل ده:

```
backend/
├── package.json
├── package-lock.json
├── server.js
└── src/...
```

نكتب `Dockerfile` جوه مجلد backend:

```dockerfile
# 1) الصورة الأساسية: Node 22 على Alpine (خفيفة)
FROM node:22-alpine

# 2) مجلد العمل
WORKDIR /app

# 3) انسخ ملفات الـ dependencies الأول (مهم للـ cache)
COPY package*.json ./

# 4) ثبّت المكتبات (production فقط)
RUN npm ci --omit=dev

# 5) بعدين انسخ باقي الكود
COPY . .

# 6) البورت اللي التطبيق بيشتغل عليه
EXPOSE 5000

# 7) تشغيل التطبيق
CMD ["node", "server.js"]
```

**ليه نسخنا `package*.json` لوحدها الأول؟** ده سر الـ cache اللي اتكلمنا عنه. لو نسخت كل الكود مرة واحدة وبعدين عملت `npm install`، أي تعديل صغير في ملف كود هيبوّظ الـ cache ويخلّي Docker يعيد تثبيت كل المكتبات من الصفر (دقائق). لكن بالترتيب الصح:

- لو غيّرت الكود بس: الطبقات 1-4 جاية من الـ cache، وبس الطبقة 5 بتتبني. **ثواني.**
- لو غيّرت `package.json`: بس هنا هيعيد `npm ci`، وده منطقي.

```
  ❌ ترتيب غلط                         ✅ ترتيب صح
  ─────────────────────               ─────────────────────
  COPY . .          ← أي تعديل          COPY package*.json ./  ← نادراً بيتغير
  RUN npm install   ← يعيد كل مرة       RUN npm ci             ← من الـ cache
                                        COPY . .               ← بس ده بيتغير
```

### ملف `.dockerignore`: لا تنساه أبداً

زي `.gitignore` بالظبط، بيمنع ملفات من إنها تتنسخ للـ Image. من غيره ممكن تنسخ `node_modules` بتاعك (ثقيلة وممكن تتعارض مع نظام تشغيل مختلف) أو ملف `.env` فيه أسرار!

```
node_modules
npm-debug.log
.git
.gitignore
.env
.env.*
Dockerfile
docker-compose*.yml
README.md
coverage
.vscode
```

### بناء الـ Image وتشغيلها

```bash
# بناء (النقطة في الآخر = السياق الحالي)
docker build -t my-api:1.0 .

# تشغيل
docker run -d -p 5000:5000 --name api \
  -e PORT=5000 \
  -e MONGO_URI=mongodb://host.docker.internal:27017/mydb \
  my-api:1.0

# اتأكد إنه شغّال
docker logs -f api
```

ملاحظة: `host.docker.internal` هو اسم خاص على Windows وMac بيشاور على جهازك الحقيقي (المضيف). هنشوف طريقة أحسن بكتير بعد شوية باستخدام Docker Compose والشبكات.

## Dockerize الـ React: الـ Multi-stage Build

لما بتبني React (Vite أو CRA) الناتج النهائي هو ملفات static: HTML وCSS وJS. يعني في الـ production **مش محتاج Node خالص**، محتاج سيرفر ملفات بسيط زي Nginx. هنا بتيجي فكرة الـ **Multi-stage Build**: مرحلة بناء بـ Node، ومرحلة تشغيل بـ Nginx، وبنرمي Node والـ `node_modules` ونخلي الـ Image النهائية خفيفة جداً.

```dockerfile
# ---------- Stage 1: Build ----------
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build          # الناتج في dist (Vite) أو build (CRA)

# ---------- Stage 2: Serve ----------
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

وده ملف `nginx.conf` اللي جنب الـ Dockerfile:

```nginx
server {
  listen 80;
  root /usr/share/nginx/html;
  index index.html;

  # React Router: أي مسار يرجّع index.html
  location / {
    try_files $uri $uri/ /index.html;
  }

  # تمرير طلبات الـ API لخدمة api جوه شبكة Docker
  location /api/ {
    proxy_pass http://api:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

فايدتين كبار من الشكل ده:

1. **الـ Image النهائية صغيرة**: بتشيل Nginx والملفات الجاهزة بس، من غير Node ولا الـ node\_modules.
2. **مفيش CORS**: الـ React والـ API بيتقدموا من نفس الـ origin، لأن Nginx هو اللي بيوجّه `/api` للـ backend. في الكود بتكتب `fetch('/api/users')` من غير أي عنوان كامل.

> **فخ مشهور:** متغيرات الـ React (`VITE_*` أو `REACT_APP_*`) بتتحط في الكود **وقت البناء** (build time)، مش وقت التشغيل. يعني تغييرها بعد الـ build مش هيأثر. ولو محتاج قيمة مختلفة لكل بيئة، مررها كـ `ARG` وقت الـ build، أو استخدم مسار نسبي زي `/api` زي ما عملنا.

## الـ Volumes: إزاي بياناتك متضيعش

تفتكر إن الـ Container مؤقت؟ لو شغّلت MongoDB في Container وبعدين مسحته، **كل الداتا هتضيع**. الحل هو الـ Volumes. فيه 3 أنواع:

| النوع | بيتخزن فين | بنستخدمه في |
| --- | --- | --- |
| **Named Volume** | مكان بيديره Docker نفسه | بيانات قواعد البيانات في الـ production والتطوير |
| **Bind Mount** | مجلد معين على جهازك بتحدده انت | التطوير: ربط الكود بحيث أي تعديل يظهر فوراً |
| **tmpfs** | في الـ RAM بس | بيانات مؤقتة حساسة مش عايزها تتكتب على الديسك |

جرّب بنفسك المثال ده:

```bash
# 1) شغّل Mongo مع Named Volume
docker run -d --name mongo-test -v mongo-data:/data/db mongo:7

# 2) أضف أي داتا، وبعدين امسح الـ Container بالكامل
docker rm -f mongo-test

# 3) شغّل Container جديد بنفس الـ Volume: الداتا لسه موجودة
docker run -d --name mongo-test2 -v mongo-data:/data/db mongo:7
```

أوامر إدارة الـ Volumes:

```bash
docker volume ls                 # عرض الـ Volumes
docker volume inspect mongo-data # تفاصيل (مكانه على الديسك...)
docker volume rm mongo-data      # حذف (البيانات هتروح!)
```

### الـ Bind Mount في التطوير

بدل ما تعمل build جديد كل ما تعدّل سطر كود، اربط مجلد المشروع بالـ Container:

```bash
docker run -it --rm -p 5000:5000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  my-api-dev npx nodemon server.js
```

السطر التاني (`-v /app/node_modules`) مهم: بيحمي الـ `node_modules` اللي جوه الـ Container من إنها تتغطّى بالمجلد اللي على جهازك (اللي ممكن يكون مثبّت لنظام تشغيل تاني).

### Backup للداتا

أضمن طريقة لـ MongoDB هي `mongodump` (مش نسخ ملفات الـ Volume وهو شغّال):

```bash
# نسخ احتياطي
docker compose exec -T mongo mongodump -u "$MONGO_USER" -p "$MONGO_PASSWORD" \
  --authenticationDatabase admin --archive --gzip > backup.gz

# استرجاع
docker compose exec -T mongo mongorestore -u "$MONGO_USER" -p "$MONGO_PASSWORD" \
  --authenticationDatabase admin --archive --gzip --drop < backup.gz
```

## الـ Networks: إزاي الـ Containers بتتكلم مع بعض

افتراضياً كل Container ليه IP داخلي خاص بيه، لكن الـ IP بيتغير. فمش هتعتمد عليه. الحل: **User-defined Bridge Network**، اللي بتديك **DNS داخلي**: كل Container يقدر يوصل لأي Container تاني على نفس الشبكة **باسمه**.

```bash
docker network create app-net

docker run -d --name mongo --network app-net mongo:7
docker run -d --name api --network app-net \
  -e MONGO_URI=mongodb://mongo:27017/mydb my-api:1.0
```

لاحظ إن عنوان Mongo بقى `mongo:27017` مش `localhost` ولا IP. وده أكتر خطأ بيقع فيه المبتدئين: **`localhost` جوه الـ Container معناها الـ Container نفسه، مش جهازك ولا Container تاني.**

أنواع الشبكات:

| النوع | الاستخدام |
| --- | --- |
| `bridge` | الافتراضي على جهاز واحد (واللي هتستخدمه 95% من الوقت) |
| `host` | الـ Container بيشارك شبكة جهازك مباشرة (Linux فقط عملياً، من غير عزل) |
| `none` | من غير شبكة نهائياً |
| `overlay` | شبكة بين أكتر من سيرفر (Swarm / Kubernetes) |

### الفرق بين `EXPOSE` و`-p`

- `EXPOSE 5000` في الـ Dockerfile = **توثيق** بس (للي بيقرأ الملف).
- `-p 5000:5000` عند التشغيل = **اللي بيفتح البورت فعلياً** لجهازك.
- Containers على نفس الشبكة بيوصلوا لبعض على أي بورت **من غير `-p`**.

نصيحة أمان: لو عايز تفتح بورت لجهازك انت بس (للتطوير) من غير ما يكون متاح لباقي الشبكة، اكتب:

```bash
-p 127.0.0.1:27017:27017
```

## Docker Compose: تشغيل المشروع كله بأمر واحد

تخيّل إنك كل مرة لازم تكتب 3 أوامر `docker run` طويلة بالـ flags كلها. ده مرهق ومعرّض للغلط. **Docker Compose** بيخليك تكتب كل ده في ملف واحد `docker-compose.yml` (أو `compose.yaml`) وتشغّله بأمر واحد. بيعمل لك الشبكة والـ Volumes والـ Containers وترتيب التشغيل.

أهم أوامره:

| الأمر | وظيفته |
| --- | --- |
| `docker compose up -d` | شغّل كل الخدمات في الخلفية |
| `docker compose up -d --build` | أعد بناء الـ Images وبعدين شغّل |
| `docker compose down` | أوقف واحذف الـ Containers والشبكة (الـ Volumes بتفضل) |
| `docker compose down -v` | نفس اللي فوق **وبيحذف الـ Volumes كمان** (انتبه) |
| `docker compose ps` | حالة الخدمات |
| `docker compose logs -f api` | متابعة لوجات خدمة معينة |
| `docker compose exec api sh` | الدخول لـ terminal جوه خدمة |
| `docker compose restart api` | إعادة تشغيل خدمة |
| `docker compose config` | عرض الملف النهائي بعد دمج المتغيرات (ممتاز للـ debugging) |

أهم المفاتيح في الملف:

- **`services`**: كل خدمة (api, web, mongo...).
- **`build`** أو **`image`**: اعمل build من Dockerfile أو استخدم Image جاهزة.
- **`ports`**: فتح البورتات.
- **`environment`** و\*\*`env_file`\*\*: متغيرات البيئة.
- **`volumes`**: الربط بالتخزين.
- **`networks`**: الشبكات.
- **`depends_on`**: ترتيب التشغيل (مع `condition: service_healthy` تستنى لحد ما الخدمة تبقى سليمة فعلاً).
- **`restart`**: سياسة إعادة التشغيل (`unless-stopped` مناسبة للـ production).
- **`healthcheck`**: اختبار إن الخدمة شغالة فعلاً مش بس إن الـ process بدأ.

## تطبيق عملي: مشروع MERN كامل بـ Docker Compose

دلوقتي هنجمّع كل اللي فات. الشكل النهائي للمعمارية:

&#91;embedded content: معمارية مشروع MERN داخل Docker Compose · 3 خدمات وVolume\]

المتصفح بيكلّم الـ **web** (Nginx) بس. Nginx بيقدّم ملفات React، وأي طلب على `/api` بيمرره للـ **api**، والـ api بيكلم **mongo** باسمه جوه الشبكة، وبيانات Mongo محفوظة في Volume. لاحظ إن Mongo والـ API **مش مكشوفين** برا الشبكة، وده أمان أحسن بكتير.

### هيكل المشروع

```
mern-docker/
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── nginx.conf
│   ├── package.json
│   └── src/...
├── docker-compose.yml
├── .env              # أسرار حقيقية: ما ترفعوش على Git
├── .env.example      # نموذج بدون قيم حساسة: ارفعه على Git
└── .gitignore
```

### ملف `backend/server.js` (مثال مبسّط)

```js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    const server = app.listen(PORT, () => console.log(`API on ${PORT}`));

    // إيقاف نظيف عند docker stop
    process.on('SIGTERM', () => {
      server.close(() => mongoose.connection.close().then(() => process.exit(0)));
    });
  })
  .catch((err) => {
    console.error('DB connection failed', err);
    process.exit(1);
  });
```

### `backend/Dockerfile`

```dockerfile
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --chown=node:node . .

# تشغيل بمستخدم غير root (أمان)
USER node

EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:5000/api/health || exit 1

CMD ["node", "server.js"]
```

### `.env`

```bash
MONGO_USER=admin
MONGO_PASSWORD=change_me_to_a_strong_password
DB_NAME=mernapp
JWT_SECRET=change_me_too
```

> لو الباسورد فيه رموز خاصة (`@` أو `:` أو `/`) لازم تعمل لها URL-encoding جوه الـ `MONGO_URI`، وإلا الاتصال هيفشل.

### `docker-compose.yml`

```yaml
services:
  mongo:
    image: mongo:7
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASSWORD}
    volumes:
      - mongo-data:/data/db
    networks:
      - app-net
    healthcheck:
      test: ["CMD", "mongosh", "--quiet", "--eval", "db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 20s

  api:
    build: ./backend
    restart: unless-stopped
    environment:
      PORT: 5000
      MONGO_URI: mongodb://${MONGO_USER}:${MONGO_PASSWORD}@mongo:27017/${DB_NAME}?authSource=admin
      JWT_SECRET: ${JWT_SECRET}
    depends_on:
      mongo:
        condition: service_healthy
    networks:
      - app-net

  web:
    build: ./frontend
    restart: unless-stopped
    ports:
      - "80:80"
    depends_on:
      - api
    networks:
      - app-net

volumes:
  mongo-data:

networks:
  app-net:
```

ملاحظات مهمة على الملف:

- **مفيش `version:` في الأول**: المفتاح ده قديم وبقى اختياري في Compose الحديث.
- **`${MONGO_USER}`**: Compose بيقرأها تلقائياً من ملف `.env` اللي جنب الـ compose.
- **`depends_on` مع `service_healthy`**: `depends_on` لوحده بيستنى الـ Container *يبدأ* بس، مش إن Mongo *يبقى جاهز*. عشان كده استخدمنا healthcheck.
- **Mongo ملهوش `ports`**: يعني مش متاح من برا. ولو عايز تتصل عليه بـ Compass في التطوير، أضف `ports: ["127.0.0.1:27017:27017"]` مؤقتاً.

### التشغيل

```bash
docker compose up -d --build   # بناء وتشغيل كل حاجة
docker compose ps              # اتأكد إن الكل Up (healthy)
docker compose logs -f api     # شوف اللوجات
```

افتح `http://localhost` وهتلاقي React شغال، و`http://localhost/api/health` هيرجّع `{"status":"ok"}`. ولما تخلص: `docker compose down`.

## متغيرات البيئة والأسرار (Secrets)

فيه 3 طرق لتمرير الإعدادات للـ Container:

```bash
# 1) flag مباشر
docker run -e NODE_ENV=production -e PORT=5000 my-api

# 2) ملف كامل
docker run --env-file .env my-api
```

وفي Compose: `environment:` أو `env_file:` أو متغيرات `${VAR}` من ملف `.env`.

**القاعدة الأهم:** الأسرار (باسورد الداتابيز، JWT secret، مفاتيح API) **ممنوع** تتكتب جوه الـ Dockerfile بـ `ENV` أو `ARG`، ولا تتنسخ بـ `COPY .env`. أي حاجة بتتكتب في الـ Image بتفضل فيها، وأي حد معاه الـ Image يقدر يطلعها بأمر `docker history` أو يفتح الطبقات. الأسرار بتتمرر **وقت التشغيل** بس.

وللـ production بشكل أحسن، Compose بيدعم **secrets** كملفات مقروءة جوه الـ Container، والـ Image الرسمية لـ Mongo بتقبل `_FILE`:

```yaml
services:
  mongo:
    image: mongo:7
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD_FILE: /run/secrets/mongo_password
    secrets:
      - mongo_password

secrets:
  mongo_password:
    file: ./secrets/mongo_password.txt   # ملف خارج Git
```

## بيئة التطوير مقابل الإنتاج

في التطوير عايز: تعديل الكود يظهر فوراً (hot reload)، والـ DB متاحة لك بـ Compass، ولوجات تفصيلية. في الإنتاج عايز: صورة صغيرة، من غير أدوات تطوير، وبورتات مقفولة. الحل الأنظف: **Multi-stage Dockerfile بأكتر من target** + ملف Compose override.

### `backend/Dockerfile` (النسخة النهائية بـ targets)

```dockerfile
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---------- التطوير ----------
FROM base AS dev
RUN npm ci
COPY . .
CMD ["npx", "nodemon", "server.js"]

# ---------- الإنتاج (آخر stage = الافتراضي) ----------
FROM base AS prod
ENV NODE_ENV=production
RUN npm ci --omit=dev
COPY --chown=node:node . .
USER node
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:5000/api/health || exit 1
CMD ["node", "server.js"]
```

### `frontend/Dockerfile` (النسخة النهائية)

```dockerfile
FROM node:22-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

FROM dev AS build
RUN npm run build

FROM nginx:1.27-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

وفي `vite.config.js` عشان الـ dev server يوجّه `/api` للـ backend زي ما Nginx بيعمل في الإنتاج:

```js
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: { '/api': 'http://api:5000' },
    watch: { usePolling: true }   // مهم لو الـ hot reload مش شغال على Windows/Mac
  },
});
```

### `docker-compose.override.yml` (للتطوير فقط)

Compose بيحمّل الملف ده **تلقائياً** فوق `docker-compose.yml` لما تكتب `docker compose up`:

```yaml
services:
  mongo:
    ports:
      - "127.0.0.1:27017:27017"     # للـ Compass في التطوير بس

  api:
    build:
      context: ./backend
      target: dev
    command: npx nodemon --legacy-watch server.js
    environment:
      NODE_ENV: development
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
      - /app/node_modules

  web:
    build:
      context: ./frontend
      target: dev
    ports:
      - "5173:5173"
    volumes:
      - ./frontend:/app
      - /app/node_modules
```

النتيجة:

```bash
# تطوير: بيحمّل compose + override تلقائياً
docker compose up

# إنتاج: -f صريح بيتجاهل ملف override
docker compose -f docker-compose.yml up -d --build
```

> **تنبيه:** على السيرفر اكتب `-f docker-compose.yml` دايماً (أو احذف ملف override من هناك) عشان ما يشتغلش بإعدادات التطوير بالغلط.

وفي Compose الحديث فيه كمان `docker compose watch` اللي بيراقب الملفات ويعمل sync أو rebuild تلقائياً، وده بديل للـ bind mount لو بتواجه بطء، وتقدر تقرأ عنه في التوثيق الرسمي.

## أفضل الممارسات (Best Practices)

دي الجدول الأهم في المقال كله. لو التزمت بيه هتتجنب 90% من مشاكل Docker:

| ❌ غلط | ✅ صح | ليه |
| --- | --- | --- |
| `FROM node:latest` | `FROM node:22-alpine` | الـ latest بتتغير وبتكسر الـ build فجأة. ثبّت الإصدار |
| `FROM node` (Image كاملة) | `alpine` أو `slim` | حجم أقل وسطح هجوم أصغر |
| `COPY . .` ثم `npm install` | `COPY package*.json` ثم `npm ci` ثم `COPY . .` | استغلال الـ cache |
| `npm install` | `npm ci --omit=dev` | تثبيت مطابق للـ lock file، وبدون أدوات التطوير |
| من غير `.dockerignore` | `.dockerignore` فيه node\_modules و.git و.env | build أسرع وأمان أعلى |
| تشغيل بـ root | `USER node` | لو الـ app اتخرقت، الضرر محدود |
| `ENV DB_PASS=123` في الـ Dockerfile | تمرير الأسرار وقت التشغيل بس | الـ Image بتفضل محتفظة بالقيم |
| كل حاجة في Container واحد (Node + Mongo) | Container لكل خدمة | تحجيم وتحديث وdebug أسهل |
| تخزين الداتا جوه الـ Container | Volume | الـ Container مؤقت |
| كتابة اللوجات في ملفات | الكتابة على `stdout/stderr` | `docker logs` وأدوات التجميع بتقراها |
| `CMD npm start` | `CMD ["node", "server.js"]` | npm بيبلع إشارات الإيقاف، وexec form بيخلي الإيقاف نضيف |
| `RUN apt-get update` لوحدها | `RUN apt-get update && apt-get install -y x && rm -rf /var/lib/apt/lists/*` | في طبقة واحدة عشان الـ cache ومساحة أقل |
| Image واحدة للتطوير والإنتاج | Multi-stage بـ targets | الإنتاج بيبقى صغير وبدون أدوات |

### قائمة فحص الأمان

- **افحص الـ Images**: بأدوات زي `docker scout` أو Trivy، وحدّث الـ base image بانتظام.
- **ماتفتحش بورتات الداتابيز** للإنترنت. خلّيها داخل الشبكة، أو اربطها بـ `127.0.0.1`.
- **ماتربطش `/var/run/docker.sock`** جوه Container إلا لو فاهم الخطر (ده بيدي الـ Container تحكم كامل في Docker).
- **حدّد الموارد** عشان Container واحد ما ياكلش السيرفر:

```yaml
  api:
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: 512M
```

- **استخدم `read_only: true`** و`cap_drop: [ALL]` للخدمات اللي ماتحتاجش تكتب على الـ filesystem أو صلاحيات إضافية (بتتجرب تدريجياً).
- **ما تكتبش أسرار في الـ Git** حتى في ملف compose.

## رفع الـ Image على Registry

عشان تنقل الـ Image للسيرفر أو تشاركها مع فريقك، لازم ترفعها على Registry. أشهرهم Docker Hub، وكمان GitHub Container Registry (GHCR) وAWS ECR وغيرهم.

```bash
docker login                                   # تسجيل الدخول
docker build -t youruser/mern-api:1.0.0 ./backend
docker tag youruser/mern-api:1.0.0 youruser/mern-api:latest
docker push youruser/mern-api:1.0.0
docker push youruser/mern-api:latest

# على أي جهاز تاني
docker pull youruser/mern-api:1.0.0
```

نصائح:

- استخدم **Tags بإصدارات واضحة** (`1.0.0` أو رقم الـ commit) وماتعتمدش على `latest` لوحدها في الإنتاج، عشان تعرف تعمل rollback بسهولة.
- لو المشروع خاص، استخدم **Private Repository**.
- في compose الإنتاج تقدر تستبدل `build:` بـ `image: youruser/mern-api:1.0.0` ، فالسيرفر يسحب الـ Image جاهزة بدل ما يبنيها.

## CI/CD: بناء ورفع الـ Image أوتوماتيك

بدل ما تبني وترفع بإيدك كل مرة، خلّي GitHub Actions يعمل ده مع كل push على `main`. ضيف الملف `.github/workflows/docker.yml`:

```yaml
name: docker
on:
  push:
    branches: [main]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: docker/setup-buildx-action@v3

      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - uses: docker/build-push-action@v6
        with:
          context: ./backend
          push: true
          tags: |
            youruser/mern-api:latest
            youruser/mern-api:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

سجّل `DOCKERHUB_USERNAME` و`DOCKERHUB_TOKEN` في **Settings → Secrets** في الريبو (استخدم Access Token مش الباسورد). وكرر نفس الـ step للـ frontend. راجع أحدث إصدارات الـ Actions من صفحاتها الرسمية قبل ما تثبّتها.

## النشر على سيرفر (VPS)

أبسط مسار نشر لمشروع MERN: سيرفر Linux (DigitalOcean، Hetzner، AWS EC2، أو غيرهم) + Docker + Compose.

1. **ثبّت Docker** على السيرفر (نفس خطوات Linux فوق).
2. **انقل ملفات المشروع**: `docker-compose.yml` و`.env` بالـ scp أو git clone. (الـ `.env` بتتكتب على السيرفر مباشرة وماتتحطش في Git).
3. **شغّل**:

```bash
docker compose -f docker-compose.yml pull     # لو بتستخدم images من registry
docker compose -f docker-compose.yml up -d
```

4. **للتحديث بعد كل نسخة جديدة**:

```bash
docker compose -f docker-compose.yml pull
docker compose -f docker-compose.yml up -d
docker image prune -f
```

### HTTPS بسهولة مع Caddy

محتاج شهادة SSL؟ أسهل طريقة تحط **Caddy** قدام الـ web، وهو بيجيب الشهادة ويجددها تلقائياً. ضيف الخدمة دي في compose، وشيل `ports` من خدمة `web`:

```yaml
  caddy:
    image: caddy:2
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy-data:/data
    depends_on:
      - web
    networks:
      - app-net
```

وملف `Caddyfile`:

```
example.com {
  reverse_proxy web:80
}
```

(وضيف `caddy-data:` تحت `volumes:` في آخر الملف، وبدّل `example.com` بدومينك اللي بيشاور على IP السيرفر).

> **فخ أمني معروف:** Docker بيعدّل قواعد iptables بنفسه، فالبورتات اللي بتنشرها بـ `-p` ممكن تتخطى قواعد جدار الحماية زي `ufw`. يعني لو عملت `ports: "27017:27017"` فالداتابيز مفتوحة للعالم حتى لو ufw بيقول إنها مقفولة. الحل: ماتنشرش إلا اللي لازم، واستخدم `127.0.0.1:` قدام البورت لو مش عايزه خارجي.

## حل المشاكل الشائعة (Troubleshooting)

| المشكلة | السبب المحتمل | الحل |
| --- | --- | --- |
| الـ Container بيقف بعد ثواني | الـ process الأساسي خلص أو حصل خطأ | `docker logs <name>` وبعدين راجع `CMD` |
| `ECONNREFUSED 127.0.0.1:27017` | بتستخدم `localhost` جوه Container | استخدم اسم الخدمة: `mongo:27017` |
| `port is already allocated` | البورت مستخدم على جهازك | غيّر البورت الأيسر (`-p 5001:5000`) أو أوقف البرنامج المستخدم له |
| الـ API بيبدأ قبل Mongo ويفشل | Mongo لسه مش جاهز | `healthcheck` + `depends_on: condition: service_healthy` + retry في الكود |
| عدّلت الكود ومفيش تغيير | الـ Image قديمة أو الـ cache | `docker compose up -d --build` أو `docker compose build --no-cache` |
| عدّلت متغير بيئة ومفيش تغيير | الـ Container لسه شغال بالقديم | `docker compose up -d` (بيعمل recreate تلقائياً) |
| أخطاء مع مكتبات native زي bcrypt | اختلاف بين Alpine (musl) والنظام | جرّب `node:22-slim` أو استخدم `bcryptjs` |
| `permission denied` على Volume أو ملفات | الـ `USER` مش عنده صلاحية | `chown` للمجلد أو `COPY --chown` |
| بطء شديد مع bind mount على Windows | الملفات على نظام ملفات Windows | حط المشروع جوه WSL 2 filesystem نفسه |
| المساحة خلصت | Images وVolumes قديمة | `docker system df` ثم `docker system prune` (انتبه للـ Volumes) |

أدوات الـ debugging الأساسية:

```bash
docker logs -f --tail 100 <name>     # آخر 100 سطر ومتابعة
docker inspect <name>                # كل التفاصيل
docker exec -it <name> sh            # ادخل جواه
docker compose config                # شوف الملف النهائي بعد دمج المتغيرات
docker run --rm -it <image> sh       # شغّل الـ Image وافحصها
docker history <image>               # شوف طبقات الـ Image وأحجامها
```

## امتى تستخدم Docker وامتى لأ؟

| ✅ استخدمه لما | ⚠️ فكّر مرتين لما |
| --- | --- |
| شغال في فريق وعايز بيئة موحّدة للكل | مشروع frontend ثابت صغير، واستضافته على Vercel أو Netlify أبسط وأسرع |
| مشروعك محتاج خدمات جانبية: Mongo, Redis, RabbitMQ, Postgres | تطبيق سطح مكتب بواجهة رسومية (GUI) |
| عايز تجرّب إصدارات مختلفة من نفس الأداة من غير تثبيت | الداتابيز الإنتاجية الحرجة وانت مالكش خبرة في الـ backup والصيانة (فكّر في خدمة مُدارة زي MongoDB Atlas) |
| بتنشر على سيرفرات أو سحابة | الفريق صغير جداً ومنصة PaaS (زي Railway أو Render) بتغطي احتياجك من غير تعقيد |
| بتبني CI/CD أو pipelines للـ testing | محتاج وصول مباشر للهاردوير أو GPU من غير إعداد إضافي |
| بتتعامل مع Microservices أو أكتر من خدمة |  |
| عايز onboarding سريع لأي مطوّر جديد |  |

نصيحة عملية لمطوّر MERN: لو لسه بتبدأ، **أسهل استخدام وأعلى قيمة هو تشغيل MongoDB بـ Docker** وإنت شغّال الـ Node والـ React على جهازك عادي:

```bash
docker run -d --name mongo -p 127.0.0.1:27017:27017 -v mongo-data:/data/db mongo:7
```

بكده مفيش تثبيت ولا تعارض إصدارات، وتقدر تمسحها وترجع تعملها في ثانية. وبعدين تتدرّج لـ Compose الكامل.

## بعد Compose: نظرة سريعة على الـ Orchestration

لما مشروعك يكبر وتحتاج تشغّل نسخ متعددة من الخدمة على أكتر من سيرفر، مع تحديثات بدون توقف (rolling updates) وتوسّع تلقائي، بتحتاج **Orchestrator**. أشهرهم **Kubernetes**، وفيه **Docker Swarm** كبديل أبسط. بس الحقيقة إن أغلب المشاريع الصغيرة والمتوسطة **مش محتاجة Kubernetes**: سيرفر واحد أو اتنين بـ Compose كفاية جداً. وفيه حل وسط: خدمات Containers مُدارة زي AWS ECS أو Google Cloud Run أو Azure Container Apps أو Fly.io، بتشغّل الـ Image بتاعتك من غير ما تدير سيرفرات. ابدأ بـ Compose، ولما تحس باحتياج حقيقي انتقل.

## Cheat Sheet: أهم الأوامر في صفحة واحدة

```bash
# ---------- Images ----------
docker build -t name:tag .            # بناء
docker images                         # عرض
docker pull / push name:tag           # تحميل / رفع
docker rmi name:tag                   # حذف

# ---------- Containers ----------
docker run -d -p H:C --name n -e K=V -v vol:/path image
docker ps [-a]                        # عرض
docker stop|start|restart n           # تحكم
docker rm [-f] n                      # حذف
docker logs -f n                      # لوجات
docker exec -it n sh                  # دخول
docker stats                          # استهلاك الموارد

# ---------- Volumes & Networks ----------
docker volume ls | inspect | rm
docker network ls | create | inspect

# ---------- Compose ----------
docker compose up -d --build
docker compose down [-v]
docker compose ps | logs -f | exec <svc> sh
docker compose config

# ---------- تنظيف ----------
docker system df
docker system prune
```

## خطة تعلّم عملية: من الصفر لمشروعك الأول

القراءة وحدها مش كفاية. نفّذ الخطوات دي بالترتيب على مشروع MERN حقيقي بتاعك:

1. **اليوم 1:** ثبّت Docker، وجرّب `docker run` مع nginx وmongo وnode، وافهم الـ Image والـ Container.
2. **اليوم 2:** اكتب Dockerfile للـ backend، وابنِه وشغّله، واتصل بـ Mongo شغّال في Container تاني على نفس الشبكة.
3. **اليوم 3:** اكتب Dockerfile للـ frontend بـ Multi-stage مع Nginx.
4. **اليوم 4:** اجمع الكل في `docker-compose.yml` مع Volume وHealthcheck وملف `.env`.
5. **اليوم 5:** أضف الـ `dev` targets وملف `override` وشغّل hot reload.
6. **اليوم 6:** ارفع الـ Images على Docker Hub، وركّب GitHub Actions.
7. **اليوم 7:** انشر المشروع على VPS مع Caddy وHTTPS.

تحديات إضافية: أضف خدمة Redis للـ cache أو الـ sessions، وجرّب `docker scout` لفحص الأمان، وقلّل حجم الـ Image بتاعتك وقارن قبل وبعد باستخدام `docker images`.

## خاتمة

Docker مش أداة معقدة زي ما بيتهيأ في الأول. هو في الأساس فكرتين: **Image** (وصفة ثابتة) و**Container** (نسخة شغالة منها)، وكل الباقي تفاصيل حوالين الفكرتين دول. بعد ما تتعلمه هتلاقي إن إعداد بيئة جديدة، وتشغيل مشروعك عند أي زميل، ونشره على سيرفر بقى كله أمر واحد. ومع الوقت هتلاقيه جزء طبيعي من أي مشروع بتبنيه.

للتعمق أكتر:

- التوثيق الرسمي: `docs.docker.com` (فيه Get Started وأدلة Compose وBest Practices).
- خارطة طريق Docker على `roadmap.sh/docker`.
- أفضل تدريب: طبّق كل اللي في المقال ده على مشروع بتاعك، وجرّب تكسره وتصلحه.

لو المقال أفادك، شاركه مع زميل MERN Developer وجرّبوا الخطة العملية سوا.
