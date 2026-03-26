# How to Run the 3D CV Portfolio

## Quick Start

### Step 1: Install Dependencies

Open terminal in the project root and run:
```bash
npm run install-all
```

This will install all dependencies for both backend and frontend.

### Step 2: Start the Backend

In one terminal:
```bash
cd backend
npm start
```

Backend will run on `http://localhost:5000`

### Step 3: Start the Frontend

In another terminal:
```bash
cd frontend
npm start
```

Frontend will run on `http://localhost:3000`

## Or Use Concurrent Start

If you have concurrently installed globally or want to run both at once:
```bash
npm run dev
```

## Important Notes

1. **Backend must be running first** before the frontend tries to connect to it
2. **The frontend will automatically proxy requests** to the backend at port 5000 (configured in frontend/package.json)
3. **Node.js and npm must be installed** on your system

## Troubleshooting

### Port Already In Use?

If port 5000 is in use:
- Edit `backend/server.js` and change the PORT variable
- Update `frontend/package.json` proxy setting accordingly

If port 3000 is in use:
- React will ask to use a different port automatically

### Dependencies Not Installing?

Try:
```bash
npm cache clean --force
npm run install-all
```

### 3D Cube Not Showing?

- Make sure your browser supports WebGL
- Check browser console for errors
- Try a different browser

## File Structure

- `/backend` - Express.js server with CV data API
- `/frontend` - React app with Three.js 3D graphics
- `/README.md` - Full project documentation

Enjoy your 3D CV Portfolio! 🚀
