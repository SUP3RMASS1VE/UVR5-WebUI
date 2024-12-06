module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/SUP3RMASS1VE/UVR5-UI app",  // Clone the GitHub repository
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",  // Virtual environment folder path
          path: "app",  // Path to start the shell from
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",  // Virtual environment folder path
        path: "app",  // Path to start the shell from
        message: [
          "pip install --no-input gradio==5.7.1",
          "pip install --no-input scipy",
          "pip install --no-input yt-dlp", 
          "pip install --no-input gradio_i18n", 
          "pip install --no-input audio-separator[gpu]==0.24.1" 
          "pip install --no-input audio-separator[gpu]==0.24.1" 
        ]
      }
    },
  ]
}
