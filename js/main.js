function diff_match_patch() {
  this.Diff_Timeout = 1;
  this.Diff_EditCost = 4;
  this.Match_Threshold = .5;
  this.Match_Distance = 1e3;
  this.Patch_DeleteThreshold = .5;
  this.Patch_Margin = 4;
  this.Match_MaxBits = 32
}(function() {
  function t() {
    return cwf.Statistics = new n, cwf.Statistics.reCalculate(), $(".btn-original").addClass("disabled"), cwf.Statistics.original = null, cwf.Statistics
  }
  var n;
  n = function() {
    function t() {
      this.initialize()
    }

    function n(n) {
      return n = n.replace(/^\s*\n/gm, ""), n = n.replace(/^\s+/gm, ""), n.replace(/\s+$/gm, "")
    }
    return t.prototype = {
      initialize: function() {
        this.txtArea = $("textarea#analyze-text");
        this.txtArea.bind("input propertychange", this.reCalculate);
        this.txtArea.bind("select", this.onSelect);
        this.txtArea.bind("blur focus keydown mousedown", this.onUnselect);
        $(".btn-clear").click(this.clear);
        $(".btn-remove-tags").click(this.removetags);
        $(".btn-remove-newlines").click(this.remove_new_lines);
        $(".btn-upper").click(this.upper);
        $(".btn-lower").click(this.lower);
        $(".btn-original").click(this.showoriginal);
        $("#OptionsDlg").on("shown.bs.modal", this.loadoptions);
        $(".btn-options").click(this.showoptions);
        $(".btn-options-save").click(this.saveoptions);
        $(".phrases-refresh").click(this.phrasesExec);
        this.generalPanel = "#general-panel";
        this.wordsPanel = "#words-panel";
        this.phrasesPanel = "#phrases-panel";
        this.initializeDisclaimer()
      },
      initializeDisclaimer: function() {
        var n = Cookies.get("cookie-disclaimer");
        (n == undefined || n == "true") && (Cookies.set("cookie-disclaimer", !0, {
          expires: 365
        }), $(".disclaimer").show());
        $(".agree-disclaimer").click(function() {
          return Cookies.set("cookie-disclaimer", !1, {
            expires: 365
          }), $(".disclaimer").hide(), !1
        })
      },
      oncollapse: function(n) {
        var t = $(n).closest("table");
        return t.find("tr.in").length <= 10 ? $(n).text("Less ..") : $(n).text("More .."), !1
      },
      setValue: function(n) {
        cwf.Statistics.txtArea.val(n);
        cwf.Statistics.text = n
      },
      getValue: function() {
        return cwf.Statistics.txtArea.val()
      },
      reCalculateSelection: function() {
        var n = cwf.Statistics.getSelection();
        n.length > 0 ? cwf.Statistics.updateMainMetrics(n.text.replace(/(\r\n|\n|\r)/gm, "").length, cwf.Statistics.getWordsForText(n.text).length) : cwf.Statistics.updateMainMetrics(cwf.Statistics._symbols, cwf.Statistics._words)
      },
      onSelect: function() {
        cwf.Statistics.reCalculateSelection()
      },
      onUnselect: function() {
        cwf.Statistics.updateMainMetrics(cwf.Statistics._symbols, cwf.Statistics._words)
      },
      reCalculate: function() {
        if (cwf.Statistics.txtArea != null && cwf.Statistics.txtArea.length > 0) {
          var n = function() {
            cwf.Statistics.text = cwf.Statistics.txtArea.val();
            cwf.Statistics.original == null && (cwf.Statistics.original = cwf.Statistics.text);
            $(".btn-original").removeClass("disabled");
            cwf.Statistics.getallignorestopwords(cwf.Statistics.execCalculate);
            cwf.Statistics.txtArea.val().length > 1048567 && (toastr.clear(), toastr.info("Analysis of the document is complete!", null, {
              timeOut: 3e3,
              progressBar: !0
            }))
          };
          cwf.Statistics.txtArea.val().length > 1048567 ? (toastr.clear(), toastr.info("Analyzing the document...", null, {
            timeOut: 0,
            extendedTimeOut: 0
          }), setTimeout(n, 3e3)) : n()
        }
      },
      reParameterise: function() {
        cwf.Statistics.wordsExec_light()
      },
      reParameterise_Phrase: function() {
        cwf.Statistics.phrasesExec_light()
      },
      execCalculate: function(n) {
        cwf.Statistics.allWords = [];
        cwf.Statistics.generalExec();
        cwf.Statistics.wordsExec(n)
      },
      getPunctuation: function(n) {
        n != undefined && (cwf.Statistics.text = n);
        var t = cwf.Statistics.text.match(cwf.Statistics.punctuation_regex),
          i = cwf.Statistics.text.match(cwf.Statistics.dashes_regex);
        return (t == null || t == 0 ? 0 : t.length) + (i == null || i == 0 ? 0 : i.length)
      },
      getUniqueText: function(n, t) {
        return t !== undefined && t || (n = n.replace(/(\r\n|\n|\r)/gm, " ")), n = n.replace(cwf.Statistics.scripts_regex, " "), n = n.replace(/>/g, "> "), n = $("<div/>").append(n).text(), n.replace(/  +/g, " ")
      },
      getWords: function(t) {
        if (cwf.Statistics.allWords = [], t != undefined && (cwf.Statistics.text = t), cwf.Statistics.text.length > 0) {
          var i = this.getUniqueText(cwf.Statistics.text);
          i = XRegExp.replace(i, cwf.Statistics.punctuation_regex, " ");
          i = XRegExp.replace(i, cwf.Statistics.dashes_regex, function(n) {
            return n.replace("-", " ")
          });
          cwf.Statistics.allWords = i.toLowerCase().split(" ")
        }
        return cwf.Statistics.allWords = $.grep(cwf.Statistics.allWords, function(n) {
          return n != undefined && n != null && n.length > 0 && n.replace(/\s/g, "").length > 0
        }), $.each(cwf.Statistics.allWords, function(t, i) {
          i = n(i).toLowerCase().replace("\n", "")
        }), cwf.Statistics.allWords
      },
      getWordsForText: function(t) {
        if (t.length === 0) return 0;
        var i = this.getUniqueText(t);
        return i = XRegExp.replace(i, cwf.Statistics.punctuation_regex, " "), i = XRegExp.replace(i, cwf.Statistics.dashes_regex, function(n) {
          return n.replace("-", " ")
        }), i = i.toLowerCase().split(" "), i = $.grep(i, function(n) {
          return n != undefined && n != null && n.length > 0 && n.replace(/\s/g, "").length > 0
        }), $.each(i, function(t, i) {
          i = n(i).toLowerCase().replace("\n", "")
        }), i
      },
      generalExec: function() {
        var t;
        if (this.text.length == 0) {
          this.updatePanel(cwf.Statistics.generalPanel, {
            words: 0,
            symbols: 0,
            paragraphs: 0,
            sentences: 0,
            numbers: 0,
            punctuation: 0,
            lines: 0,
            readtime: 0,
            spelltime: 0
          });
          this._symbols = 0;
          this._words = 0;
          this.updateMainMetrics(0, 0);
          return
        }
        t = n(this.text).match(this.sentence_sep_regex);
        t = t != null && t.length > 0 ? $.grep(t, function(n) {
          return n.trim().length > 1
        }) : [];
        var u = this.text.match(this.numbers_regex),
          r = this.text.length == 0 ? 0 : this.getWords().length,
          f = this.text.length == 0 ? 0 : $.grep(this.text.split("\n"), function(n) {
            return n != null && n.trim().length > 0
          }),
          i = {
            words: r,
            symbols: this.text.replace(/(\r\n|\n|\r)/gm, "").length,
            paragraphs: f.length,
            sentences: this.text.length == 0 ? 0 : t.length,
            numbers: u != null ? u.length : 0,
            punctuation: this.getPunctuation(),
            lines: this.getLinesCount(),
            readtime: this.secondsToHms(r * 60 / 200),
            spelltime: this.secondsToHms(r * 60 / 150)
          };
        this._symbols = i.symbols;
        this._words = i.words;
        this.updateMainMetrics(i.symbols, i.words);
        this.updatePanel(cwf.Statistics.generalPanel, i)
      },
      updateMainMetrics: function(n, t) {
        $("#symbols-count").text(n);
        $("#words-count").text(t)
      },
      getLinesCount: function(n) {
        return n != undefined && (cwf.Statistics.text = n), cwf.Statistics.text.split(/\r*\n/).length
      },
      wordsExec: function(n) {
        var i = cwf.Statistics.allWords,
          t, r, u;
        if (i.length == 0) {
          this.updatePanel(cwf.Statistics.wordsPanel, null);
          return
        }
        cwf.Statistics.words = [];
        i != null && i.length > 0 && (t = {}, $.each(i, function(i, r) {
          if (n !== undefined && n.length > 0 && n.indexOf(r) !== -1) return !0;
          t[r] === undefined && (t[r] = 0);
          t[r] = t[r] + 1
        }), r = [], $.each(t, function(n, t) {
          r.push([n, t])
        }), u = cwf.Statistics.text.replace(/\s/g, "").length, $.each(r, function(n, t) {
          if (t != null && t.length > 0) {
            var i = {
              word: t[0],
              count: t[1],
              percentage: 0,
              symbols: t[0].length
            };
            i.percentage = (i.count * i.word.length * 100 / u).toFixed(1);
            cwf.Statistics.words.push(i)
          }
        }));
        cwf.Statistics.words = cwf.Statistics.words.sort(function(n, t) {
          return t.count != n.count ? t.count - n.count : t.percentage != n.percentage ? t.percentage - n.percentage : t.word.length != n.word.length ? t.word.length - n.word.length : 0
        });
        cwf.Statistics.words = cwf.Statistics.words.sort(firstBy("count", -1).thenBy("word"));
        cwf.Statistics.wordsExec_light()
      },
      wordsExec_light: function() {
        var n = cwf.Statistics.words;
        n = $.grep(n, function(n) {
          return n.word.length >= cwf.Parameters.words_letters_min
        });
        n = n.slice(0, cwf.Parameters.words_top_records);
        this.updatePanel(cwf.Statistics.wordsPanel, n)
      },
      phrasesExec: function() {
        var n, t;
        cwf.Statistics.updatePanel(cwf.Statistics.phrasesPanel, []);
        cwf.Statistics.phrases = [];
        n = cwf.Statistics.getUniqueText(cwf.Statistics.text);
        n != null && n.length > 0 && n.length < 1048576 && (n.length > 1024 && toastr.info("Calculating phrases density...", null, {
          timeOut: 0,
          extendedTimeOut: 0
        }), t = $.post("/phrases", {
          text: escape(cwf.Statistics.getUniqueText(n))
        }).done(function(n) {
          n.Success && (cwf.Statistics.phrases = n.Phrases, cwf.Statistics.phrasesExec_light())
        }).always(function() {
          toastr.clear()
        }))
      },
      phrasesExec_light: function() {
        var n = cwf.Statistics.phrases.slice(0, cwf.Parameters.phrases_top_records);
        cwf.Statistics.updatePanel(cwf.Statistics.phrasesPanel, n)
      },
      clear: function() {
        cwf.Statistics.setValue("");
        cwf.Statistics.words = [];
        cwf.Statistics.phrases = [];
        cwf.Statistics.reCalculate()
      },
      updatePanel: function(n, t) {
        var i = $.templates(n).render({
          stats: t,
          name: $(n).attr("id")
        });
        $("#" + $(n).data("view") + " tbody").html(i)
      },
      remove_new_lines: function() {
        var n = cwf.Statistics.getSelection();
        n.length > 0 ? (cwf.Statistics.txtArea.textrange("replace", n.text.replace(/(\r\n|\n|\r)/gm, " ")), cwf.Statistics.setValue(cwf.Statistics.txtArea.getValue())) : cwf.Statistics.setValue(cwf.Statistics.text.replace(/(\r\n|\n|\r)/gm, " "));
        cwf.Statistics.reCalculate()
      },
      getSelection: function() {
        return cwf.Statistics.txtArea.textrange()
      },
      removetags: function() {
        var n = cwf.Statistics.getUniqueText(cwf.Statistics.text, !0);
        cwf.Statistics.setValue(n);
        cwf.Statistics.reCalculate()
      },
      calculatePercentage: function(t) {
        return t == null || t.length == 0 || n(t).length == 0 ? 0 : Math.round(t.length * 100 / cwf.Statistics.text.length)
      },
      upper: function() {
        var n = cwf.Statistics.getSelection();
        n.length > 0 ? (cwf.Statistics.txtArea.textrange("replace", n.text.toUpperCase()), cwf.Statistics.setValue(cwf.Statistics.txtArea.getValue())) : cwf.Statistics.setValue(cwf.Statistics.text.toUpperCase())
      },
      lower: function() {
        var n = cwf.Statistics.getSelection();
        n.length > 0 ? (cwf.Statistics.txtArea.textrange("replace", n.text.toLowerCase()), cwf.Statistics.setValue(cwf.Statistics.txtArea.getValue())) : cwf.Statistics.setValue(cwf.Statistics.text.toLowerCase())
      },
      showoriginal: function() {
        cwf.Statistics.setValue(cwf.Statistics.original)
      },
      showoptions: function() {
        $("#OptionsDlg").modal("show")
      },
      getallignorestopwords: function(callback) {
        var langugesCookie = Cookies.get("cookie-stopwords-exclude"),
          words = [],
          needReload, jqxhr;
        langugesCookie !== undefined ? (langugesCookie = eval(langugesCookie), needReload = $.grep(langugesCookie, function(n) {
          return cwf.Statistics.stopWords[n] === undefined
        }).length > 0, needReload ? jqxhr = $.post("/stopwords", $.param({
          languages: langugesCookie
        }, !0)).done(function(n) {
          n.Success && $.each(n.Words, function(n, t) {
            t != null && (cwf.Statistics.stopWords[n] = t, words = words.concat(t))
          });
          callback(words)
        }) : ($.each(langugesCookie, function(n, t) {
          words = words.concat(cwf.Statistics.stopWords[t])
        }), callback(words))) : callback()
      },
      loadoptions: function() {
        var langugesCookie = Cookies.get("cookie-stopwords-exclude");
        langugesCookie !== undefined && (langugesCookie = eval(langugesCookie), $("#OptionsDlg input[id^=lng_]").prop("checked", !1), $.each(langugesCookie, function(n, t) {
          $("#lng_" + t).prop("checked", !0)
        }))
      },
      saveoptions: function() {
        var languagesCookie = Cookies.get("cookie-stopwords-exclude"),
          languagesToExclude = [],
          difference, jqxhr;
        $(".lngExclusion:checked").each(function() {
          languagesToExclude.push($(this).val())
        });
        difference = languagesToExclude;
        languagesCookie !== undefined && (languagesCookie = eval(languagesCookie), languagesCookie.length != 0 && languagesCookie.length == languagesToExclude.length && (difference = [], jQuery.grep(languagesCookie, function(n) {
          jQuery.inArray(n, languagesToExclude) == -1 && difference.push(n)
        })));
        cwf.Statistics.stopWords = {};
        Cookies.set("cookie-stopwords-exclude", languagesToExclude, {
          expires: 365
        });
        difference.length > 0 ? ($(".progress-loading").show(), jqxhr = $.post("/stopwords", $.param({
          languages: languagesToExclude
        }, !0)).done(function(n) {
          n.Success ? ($.each(n.Words, function(n, t) {
            t != null && (cwf.Statistics.stopWords[n] = t)
          }), cwf.Statistics.reCalculate(), $(".progress-loading").hide()) : alert("Error on load stop worsd")
        }).fail(function() {
          $(".progress-loading").hide()
        }).always(function() {
          $("#OptionsDlg").modal("hide")
        })) : (cwf.Statistics.reCalculate(), $("#OptionsDlg").modal("hide"))
      },
      secondsToHms: function(n) {
        n = Number(n);
        var t = Math.floor(n / 3600),
          i = Math.floor(n % 3600 / 60),
          r = Math.floor(n % 3600 % 60),
          u = t > 0 ? t + (t == 1 ? " hour, " : " hours ") : "",
          f = i > 0 ? i + (i == 1 ? " minute, " : " minutes ") : "",
          e = r + (r == 1 ? " second" : " seconds");
        return u + f + e
      },
      text: "",
      original: null,
      ascii_regex: /[/\x00-/\x7F]+/,
      unicode_regex: /[^/\x00-/\x7F]+/,
      numbers_regex: /\d+(\.\d+)?/ig,
      scripts_regex: /<script[^>]*>[\s\S]*?<\/script>/ig,
      sentence_sep_regex: /\s*[^.!?]*[.!?]/ig,
      punctuation_regex: /(?:[,\/#!$%\^&\*;:{}=\_`\"~()\?!]|^\.|\.$| \.|\. *[,\/#!$%\^&\*;:{}=\_`\"~()\?!])/igm,
      dashes_regex: /( -[^ ]|[^ ]- | - )/igm,
      words: [],
      allWords: [],
      phrases: [],
      txtArea: null,
      _symbols: 0,
      _words: 0,
      generalPanel: null,
      wordsPanel: null,
      phrasesPanel: null,
      stopWords: {}
    }, t
  }();
  $(document).ready(t)
}).call();
cwf = {};
Object.keys || (Object.keys = function(n) {
    if (n !== Object(n)) throw new TypeError("Object.keys called on a non-object");
    var i = [],
      t;
    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && i.push(t);
    return i
  }),
  function() {
    function t() {
      return cwf.UploaderSaver = new n, cwf.UploaderSaver
    }
    var n;
    n = function() {
      function n() {
        this.initialize()
      }
      return n.prototype = {
        initialize: function() {
          this.initializeUploader();
          this.upload_dlg = $("#uploadDlg");
          this.upload_web_dlg = $("#uploadWebDlg")
        },
        loaddisk: function() {
          $(".sourcefile").text("");
          cwf.UploaderSaver.upload_dlg.modal("show")
        },
        loadweb: function() {
          cwf.UploaderSaver.upload_web_dlg.modal("show")
        },
        savedisk: function() {
          cwf.UploaderSaver.saveDocument($(this).data("type"))
        },
        initializeUploader: function() {
          this.canLoadFromDisk = $(".load-disk").length > 0;
          $(".load-disk").click(this.loaddisk);
          $(".load-web").click(this.loadweb);
          $(".save-disk").click(this.savedisk);
          var n = new qq.FineUploaderBasic({
            autoUpload: $(".fileUpload").parents("div.load-inline").length > 0,
            multiple: !1,
            button: document.getElementById("upload_disk"),
            request: {
              endpoint: "/process/uploadfu"
            },
            validation: {
              stopOnFirstInvalidFile: !0
            },
            callbacks: {
              onUpload: function() {
                return cwf.UploaderSaver.upload_dlg.modal("hide"), toastr.info("Uploading document...", null, {
                  timeOut: 0,
                  extendedTimeOut: 0
                }), !0
              },
              onValidateBatch: function(n) {
                var t = "";
                for (idx = 0; idx < n.length; idx++)
                  if (t = n[idx].name, cwf.UploaderSaver.file_selected = t, !cwf.UploaderSaver.check_format(t)) return toastr.clear(), toastr.error("Format is not supported. Supported extensions are: <b>docx, doc, xls, xlsx, pdf, epub, txt, html, htm, css, xml, json<\/b>", null, {
                    timeOut: 4e3,
                    progressBar: !0
                  }), $(".sourcefile").text(""), !1;
                return $(".sourcefile").text(t), !0
              },
              onComplete: function(n, t, i) {
                i && (i.success ? cwf.UploaderSaver.loadDocument(i.Data) : (toastr.clear(), toastr.error("Error uploading document...", null, {
                  timeOut: 4e3,
                  progressBar: !0
                })))
              }
            }
          });
          !n._options.autoUpload && this.canLoadFromDisk && qq(document.getElementsByClassName("btn-load")[0]).attach("click", function() {
            n.uploadStoredFiles()
          });
          $(".btn-load-web").click(this.loadWebDocument)
        },
        loadDocument: function(n) {
          toastr.clear();
          toastr.info("Document has been successully uploaded. Starting processing...", null, {
            timeOut: 0,
            extendedTimeOut: 0
          });
          var t = $.connection.converterHub;
          t.client.ConvertionIsDone = function(n) {
            n.Success ? $.post("/load", {
              file: n.File
            }).done(function(n) {
              toastr.clear();
              n.Success ? (toastr.success("Document has been successfully processed.", null, {
                timeOut: 3e3,
                progressBar: !0
              }), window.OnLoadDocument ? window.OnLoadDocument(n.Text) : (cwf.Statistics.setValue(n.Text), cwf.Statistics.original = n.Text, cwf.Statistics.reCalculate())) : toastr.error("Document has not been loaded properly.", null, {
                timeOut: 3e3,
                progressBar: !0
              })
            }).fail(function() {
              toastr.clear();
              toastr.error("Document has not been loaded properly.", null, {
                timeOut: 3e3,
                progressBar: !0
              })
            }) : (toastr.clear(), toastr.error("Document has not been loaded properly.", null, {
              timeOut: 3e3,
              progressBar: !0
            }))
          };
          $.connection.hub.start().done(function() {
            t.server.send({
              File: n.id,
              ToFormat: $(".fileUpload").data("to"),
              FromFormat: n.format,
              Original: cwf.UploaderSaver.file_selected
            })
          })
        },
        loadWebDocument: function(n, t) {
          var i = $("#file_url").val(),
            r;
          i.length > 0 && (toastr.clear(), toastr.info("Start loading web document...", null, {
            timeOut: 0,
            extendedTimeOut: 0
          }), r = $.post("/loadweb", {
            url: $("#file_url").val(),
            to: $("#file_url").data("to")
          }).done(function(n) {
            toastr.clear();
            n.Success ? (toastr.success("Document has been successfully processed.", null, {
              timeOut: 3e3,
              progressBar: !0
            }), cwf.Statistics.setValue(n.Text), t === undefined ? (cwf.Statistics.original = n.Text, cwf.Statistics.reCalculate(), $("#file_url").val("")) : t(n.Text)) : toastr.error("Document has not been loaded properly.", null, {
              timeOut: 3e3,
              progressBar: !0
            })
          }).fail(function() {
            toastr.clear();
            toastr.error("Document has not been loaded properly.", null, {
              timeOut: 3e3,
              progressBar: !0
            })
          }).always(function() {
            t === undefined && cwf.UploaderSaver.upload_web_dlg.modal("hide")
          }))
        },
        saveDocument: function(n) {
          cwf.UploaderSaver.saveText(cwf.Statistics.getValue(), n)
        },
        saveText: function(n, t) {
          n.trim().length > 0 && (toastr.clear(), toastr.info("Document is being generated..", null, {
            timeOut: 0,
            extendedTimeOut: 0
          }), $.post("/save", {
            to: t,
            text: encodeURI(n)
          }).done(function(n) {
            n.Success ? (toastr.clear(), toastr.success("Document has generated successfully..", null, {
              timeOut: 3e3,
              progressBar: !0
            }), $("#downloadDlg #download-link").attr("href", "/download/" + n.type + "/" + n.id), $("#downloadDlg").modal("show")) : toastr.error("Document cannot be generated.", null, {
              timeOut: 3e3,
              progressBar: !0
            })
          }).fail(function() {
            toastr.error("Document cannot be generated.", null, {
              timeOut: 3e3,
              progressBar: !0
            })
          }))
        },
        check_format: function(n) {
          if (n.indexOf(".") != -1) {
            var t = n.split(".").pop().toLowerCase();
            return t == "doc" || t == "docx" || t == "odt" || t == "css" || t == "xml" || t == "json" || t == "txt" || t == "pdf" || t == "epub" || t == "xls" || t == "xlsx" || t == "html" || t == "htm" || t == "txt"
          }
          return !1
        },
        file_selected: "",
        upload_dlg: null,
        upload_web_dlg: null,
        canLoadFromDisk: !1
      }, n
    }();
    $(document).ready(t)
  }.call(),
  function() {
    function t() {
      cwf.Parameters.initialize()
    }
    var n;
    n = function() {
      function n() {}
      return n.prototype = {
        initialize: function() {
          this.words_letters_min = Cookies.get("words_letters_min");
          this.words_letters_min == undefined && (this.words_letters_min = 4);
          this.words_top_records = Cookies.get("words_top_records");
          this.words_top_records == undefined && (this.words_top_records = 10);
          this.phrases_top_records = Cookies.get("phrases_top_records");
          this.phrases_top_records == undefined && (this.phrases_top_records = 10);
          $(".words-min-letter").click(this.w_changeLetters);
          $(".words-rows").click(this.w_changeRecords);
          $(".phrases-rows").click(this.w_changePhraseRecords);
          this.initializeSettings()
        },
        initializeSettings: function() {
          $("#words-min-letter-value").text(this.words_letters_min);
          $("#words-rows-value").text(this.words_top_records == 1e3 ? "All" : this.words_top_records);
          $("#phrases-rows-value").text(this.phrases_top_records == 1e3 ? "All" : this.phrases_top_records)
        },
        w_changeLetters: function(n) {
          n.preventDefault();
          cwf.Parameters.words_letters_min = parseInt($(n.target).text());
          isNaN(cwf.Parameters.words_letters_min) && (cwf.Parameters.words_letters_min = 1);
          cwf.Statistics.reParameterise();
          Cookies.set("words_letters_min", cwf.Parameters.words_letters_min);
          cwf.Parameters.initializeSettings()
        },
        w_changeRecords: function(n) {
          n.preventDefault();
          cwf.Parameters.words_top_records = parseInt($(n.target).text());
          isNaN(cwf.Parameters.words_top_records) && (cwf.Parameters.words_top_records = 1e3);
          cwf.Statistics.reParameterise();
          Cookies.set("words_top_records", cwf.Parameters.words_top_records);
          cwf.Parameters.initializeSettings()
        },
        w_changePhraseRecords: function(n) {
          n.preventDefault();
          cwf.Parameters.phrases_top_records = parseInt($(n.target).text());
          isNaN(cwf.Parameters.phrases_top_records) && (cwf.Parameters.phrases_top_records = 1e3);
          cwf.Statistics.reParameterise_Phrase();
          Cookies.set("phrases_top_records", cwf.Parameters.phrases_top_records);
          cwf.Parameters.initializeSettings()
        },
        words_letters_min: 0,
        words_top_records: 0,
        phrases_top_records: 0
      }, n
    }();
    cwf.Parameters = new n;
    $(document).ready(t)
  }.call(),
  function() {
    function t() {
      return cwf.ContactForm = new n, cwf.ContactForm
    }
    var n;
    n = function() {
      function n() {
        this.initialize()
      }
      return n.prototype = {
        initialize: function() {
          $("#contact_btn").click(this.showContactForm);
          $(".btn-options-send-feedback").click(this.sendForm);
          $("#contactFormDlg").on("hide.bs.modal", function() {
            grecaptcha.reset()
          });
          $("#contactForm").validate({
            rules: {
              InputName: {
                required: !0
              },
              InputEmail: {
                required: !0,
                email: !0
              },
              InputMessage: {
                required: !0
              }
            }
          })
        },
        showContactForm: function() {
          $("#contactFormDlg").modal("show")
        },
        sendForm: function() {
          $("#contactForm").valid() && (toastr.clear(), toastr.info("Sending request...", null, {
            timeOut: 0,
            extendedTimeOut: 0
          }), $.post("/postFeedback", {
            from: encodeURI($("#InputName").val()),
            mail: encodeURI($("#InputEmail").val()),
            text: encodeURI($("#InputMessage").val()),
            key: grecaptcha.getResponse()
          }).done(function(n) {
            n.Success ? (toastr.clear(), toastr.success("Thank you for your request! We get back to you as soon as we can.", null, {
              timeOut: 3e3,
              progressBar: !0
            })) : n.captcha !== undefined ? (toastr.clear(), toastr.warning("Please, check captcha information!", null, {
              timeOut: 3e3,
              progressBar: !0
            })) : (toastr.clear(), toastr.error("Error on sending request.", null, {
              timeOut: 3e3,
              progressBar: !0
            }))
          }).fail(function() {
            toastr.clear();
            toastr.error("Error on sending request.", null, {
              timeOut: 3e3,
              progressBar: !0
            })
          }).always(function() {
            $("#contactFormDlg").modal("hide");
            grecaptcha && grecaptcha.reset()
          }))
        }
      }, n
    }();
    $(document).ready(t)
  }.call();
$(function() {});
$(function() {
  $(window).bind("load resize", function() {
    topOffset = 50;
    width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
    width < 768 ? ($("div.navbar-collapse").addClass("collapse"), topOffset = 100) : $("div.navbar-collapse").removeClass("collapse")
  });
  var n = window.location,
    t = $("ul.nav a").filter(function() {
      return this.href == n || n.href.indexOf(this.href) == 0
    }).addClass("active").parent().parent().addClass("in").parent();
  t.is("li") && t.addClass("active")
});
var DIFF_DELETE = -1,
  DIFF_INSERT = 1,
  DIFF_EQUAL = 0;
diff_match_patch.Diff;
diff_match_patch.prototype.diff_main = function(n, t, i, r) {
  var o, e, f;
  if (typeof r == "undefined" && (r = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + this.Diff_Timeout * 1e3), o = r, n == null || t == null) throw new Error("Null input. (diff_main)");
  if (n == t) return n ? [
    [DIFF_EQUAL, n]
  ] : [];
  typeof i == "undefined" && (i = !0);
  var h = i,
    u = this.diff_commonPrefix(n, t),
    s = n.substring(0, u);
  return n = n.substring(u), t = t.substring(u), u = this.diff_commonSuffix(n, t), e = n.substring(n.length - u), n = n.substring(0, n.length - u), t = t.substring(0, t.length - u), f = this.diff_compute_(n, t, h, o), s && f.unshift([DIFF_EQUAL, s]), e && f.push([DIFF_EQUAL, e]), this.diff_cleanupMerge(f), f
};
diff_match_patch.prototype.diff_compute_ = function(n, t, i, r) {
  var f, u;
  if (!n) return [
    [DIFF_INSERT, t]
  ];
  if (!t) return [
    [DIFF_DELETE, n]
  ];
  var o = n.length > t.length ? n : t,
    e = n.length > t.length ? t : n,
    s = o.indexOf(e);
  if (s != -1) return f = [
    [DIFF_INSERT, o.substring(0, s)],
    [DIFF_EQUAL, e],
    [DIFF_INSERT, o.substring(s + e.length)]
  ], n.length > t.length && (f[0][0] = f[2][0] = DIFF_DELETE), f;
  if (e.length == 1) return [
    [DIFF_DELETE, n],
    [DIFF_INSERT, t]
  ];
  if (u = this.diff_halfMatch_(n, t), u) {
    var h = u[0],
      c = u[1],
      l = u[2],
      a = u[3],
      v = u[4],
      y = this.diff_main(h, l, i, r),
      p = this.diff_main(c, a, i, r);
    return y.concat([
      [DIFF_EQUAL, v]
    ], p)
  }
  return i && n.length > 100 && t.length > 100 ? this.diff_lineMode_(n, t, r) : this.diff_bisect_(n, t, r)
};
diff_match_patch.prototype.diff_lineMode_ = function(n, t, i) {
  var f = this.diff_linesToChars_(n, t),
    l, r, s;
  n = f.chars1;
  t = f.chars2;
  l = f.lineArray;
  r = this.diff_main(n, t, !1, i);
  this.diff_charsToLines_(r, l);
  this.diff_cleanupSemantic(r);
  r.push([DIFF_EQUAL, ""]);
  for (var u = 0, e = 0, o = 0, h = "", c = ""; u < r.length;) {
    switch (r[u][0]) {
      case DIFF_INSERT:
        o++;
        c += r[u][1];
        break;
      case DIFF_DELETE:
        e++;
        h += r[u][1];
        break;
      case DIFF_EQUAL:
        if (e >= 1 && o >= 1) {
          for (r.splice(u - e - o, e + o), u = u - e - o, f = this.diff_main(h, c, !1, i), s = f.length - 1; s >= 0; s--) r.splice(u, 0, f[s]);
          u = u + f.length
        }
        o = 0;
        e = 0;
        h = "";
        c = ""
    }
    u++
  }
  return r.pop(), r
};
diff_match_patch.prototype.diff_bisect_ = function(n, t, i) {
  for (var s = n.length, y = t.length, d = Math.ceil((s + y) / 2), p = d, w = 2 * d, h = new Array(w), c = new Array(w), o, a, v, f, e, k, u, r, l, b = 0; b < w; b++) h[b] = -1, c[b] = -1;
  h[p + 1] = 0;
  c[p + 1] = 0;
  var g = s - y,
    nt = g % 2 != 0,
    tt = 0,
    it = 0,
    rt = 0,
    ut = 0;
  for (o = 0; o < d; o++) {
    if ((new Date).getTime() > i) break;
    for (a = -o + tt; a <= o - it; a += 2) {
      for (u = p + a, r = a == -o || a != o && h[u - 1] < h[u + 1] ? h[u + 1] : h[u - 1] + 1, l = r - a; r < s && l < y && n.charAt(r) == t.charAt(l);) r++, l++;
      if (h[u] = r, r > s) it += 2;
      else if (l > y) tt += 2;
      else if (nt && (f = p + g - a, f >= 0 && f < w && c[f] != -1 && (e = s - c[f], r >= e))) return this.diff_bisectSplit_(n, t, r, l, i)
    }
    for (v = -o + rt; v <= o - ut; v += 2) {
      for (f = p + v, e = v == -o || v != o && c[f - 1] < c[f + 1] ? c[f + 1] : c[f - 1] + 1, k = e - v; e < s && k < y && n.charAt(s - e - 1) == t.charAt(y - k - 1);) e++, k++;
      if (c[f] = e, e > s) ut += 2;
      else if (k > y) rt += 2;
      else if (!nt && (u = p + g - v, u >= 0 && u < w && h[u] != -1 && (r = h[u], l = p + r - u, e = s - e, r >= e))) return this.diff_bisectSplit_(n, t, r, l, i)
    }
  }
  return [
    [DIFF_DELETE, n],
    [DIFF_INSERT, t]
  ]
};
diff_match_patch.prototype.diff_bisectSplit_ = function(n, t, i, r, u) {
  var f = n.substring(0, i),
    e = t.substring(0, r),
    o = n.substring(i),
    s = t.substring(r),
    h = this.diff_main(f, e, !1, u),
    c = this.diff_main(o, s, !1, u);
  return h.concat(c)
};
diff_match_patch.prototype.diff_linesToChars_ = function(n, t) {
  function u(n) {
    for (var f = "", e = 0, t = -1, o = r.length, u; t < n.length - 1;) t = n.indexOf("\n", e), t == -1 && (t = n.length - 1), u = n.substring(e, t + 1), e = t + 1, (i.hasOwnProperty ? i.hasOwnProperty(u) : i[u] !== undefined) ? f += String.fromCharCode(i[u]) : (f += String.fromCharCode(o), i[u] = o, r[o++] = u);
    return f
  }
  var r = [],
    i = {},
    f, e;
  return r[0] = "", f = u(n), e = u(t), {
    chars1: f,
    chars2: e,
    lineArray: r
  }
};
diff_match_patch.prototype.diff_charsToLines_ = function(n, t) {
  for (var u, f, r, i = 0; i < n.length; i++) {
    for (u = n[i][1], f = [], r = 0; r < u.length; r++) f[r] = t[u.charCodeAt(r)];
    n[i][1] = f.join("")
  }
};
diff_match_patch.prototype.diff_commonPrefix = function(n, t) {
  if (!n || !t || n.charAt(0) != t.charAt(0)) return 0;
  for (var r = 0, u = Math.min(n.length, t.length), i = u, f = 0; r < i;) n.substring(f, i) == t.substring(f, i) ? (r = i, f = r) : u = i, i = Math.floor((u - r) / 2 + r);
  return i
};
diff_match_patch.prototype.diff_commonSuffix = function(n, t) {
  if (!n || !t || n.charAt(n.length - 1) != t.charAt(t.length - 1)) return 0;
  for (var r = 0, u = Math.min(n.length, t.length), i = u, f = 0; r < i;) n.substring(n.length - i, n.length - f) == t.substring(t.length - i, t.length - f) ? (r = i, f = r) : u = i, i = Math.floor((u - r) / 2 + r);
  return i
};
diff_match_patch.prototype.diff_commonOverlap_ = function(n, t) {
  var r = n.length,
    u = t.length,
    f, o, i, s, e;
  if (r == 0 || u == 0) return 0;
  if (r > u ? n = n.substring(r - u) : r < u && (t = t.substring(0, r)), f = Math.min(r, u), n == t) return f;
  for (o = 0, i = 1;;) {
    if (s = n.substring(f - i), e = t.indexOf(s), e == -1) return o;
    i += e;
    (e == 0 || n.substring(f - i) == t.substring(0, i)) && (o = i, i++)
  }
};
diff_match_patch.prototype.diff_halfMatch_ = function(n, t) {
  function a(n, t, i) {
    for (var a = n.substring(i, i + Math.floor(n.length / 4)), r = -1, e = "", s, h, c, l, u, f;
      (r = t.indexOf(a, r + 1)) != -1;) u = o.diff_commonPrefix(n.substring(i), t.substring(r)), f = o.diff_commonSuffix(n.substring(0, i), t.substring(0, r)), e.length < f + u && (e = t.substring(r - f, r) + t.substring(r, r + u), s = n.substring(0, i - f), h = n.substring(i + u), c = t.substring(0, r - f), l = t.substring(r + u));
    return e.length * 2 >= n.length ? [s, h, c, l, e] : null
  }
  var r, e, o, u, f, i, s, h, c, l, v;
  if (this.Diff_Timeout <= 0 || (r = n.length > t.length ? n : t, e = n.length > t.length ? t : n, r.length < 4 || e.length * 2 < r.length)) return null;
  if (o = this, u = a(r, e, Math.ceil(r.length / 4)), f = a(r, e, Math.ceil(r.length / 2)), u || f) i = f ? u ? u[4].length > f[4].length ? u : f : f : u;
  else return null;
  return n.length > t.length ? (s = i[0], h = i[1], c = i[2], l = i[3]) : (c = i[0], l = i[1], s = i[2], h = i[3]), v = i[4], [s, h, c, l, v]
};
diff_match_patch.prototype.diff_cleanupSemantic = function(n) {
  for (var v = !1, c = [], u = 0, f = null, t = 0, l = 0, a = 0, s = 0, h = 0; t < n.length;) n[t][0] == DIFF_EQUAL ? (c[u++] = t, l = s, a = h, s = 0, h = 0, f = n[t][1]) : (n[t][0] == DIFF_INSERT ? s += n[t][1].length : h += n[t][1].length, f && f.length <= Math.max(l, a) && f.length <= Math.max(s, h) && (n.splice(c[u - 1], 0, [DIFF_DELETE, f]), n[c[u - 1] + 1][0] = DIFF_INSERT, u--, u--, t = u > 0 ? c[u - 1] : -1, l = 0, a = 0, s = 0, h = 0, f = null, v = !0)), t++;
  for (v && this.diff_cleanupMerge(n), this.diff_cleanupSemanticLossless(n), t = 1; t < n.length;) {
    if (n[t - 1][0] == DIFF_DELETE && n[t][0] == DIFF_INSERT) {
      var i = n[t - 1][1],
        r = n[t][1],
        e = this.diff_commonOverlap_(i, r),
        o = this.diff_commonOverlap_(r, i);
      e >= o ? (e >= i.length / 2 || e >= r.length / 2) && (n.splice(t, 0, [DIFF_EQUAL, r.substring(0, e)]), n[t - 1][1] = i.substring(0, i.length - e), n[t + 1][1] = r.substring(e), t++) : (o >= i.length / 2 || o >= r.length / 2) && (n.splice(t, 0, [DIFF_EQUAL, i.substring(0, o)]), n[t - 1][0] = DIFF_INSERT, n[t - 1][1] = r.substring(0, r.length - o), n[t + 1][0] = DIFF_DELETE, n[t + 1][1] = i.substring(o), t++);
      t++
    }
    t++
  }
};
diff_match_patch.prototype.diff_cleanupSemanticLossless = function(n) {
  function f(n, t) {
    if (!n || !t) return 6;
    var i = n.charAt(n.length - 1),
      r = t.charAt(0),
      u = i.match(diff_match_patch.nonAlphaNumericRegex_),
      o = r.match(diff_match_patch.nonAlphaNumericRegex_),
      f = u && i.match(diff_match_patch.whitespaceRegex_),
      e = o && r.match(diff_match_patch.whitespaceRegex_),
      s = f && i.match(diff_match_patch.linebreakRegex_),
      h = e && r.match(diff_match_patch.linebreakRegex_),
      c = s && n.match(diff_match_patch.blanklineEndRegex_),
      l = h && t.match(diff_match_patch.blanklineStartRegex_);
    return c || l ? 5 : s || h ? 4 : u && !f && e ? 3 : f || e ? 2 : u || o ? 1 : 0
  }
  for (var i = 1, s, c; i < n.length - 1;) {
    if (n[i - 1][0] == DIFF_EQUAL && n[i + 1][0] == DIFF_EQUAL) {
      var u = n[i - 1][1],
        t = n[i][1],
        r = n[i + 1][1],
        e = this.diff_commonSuffix(u, t);
      e && (s = t.substring(t.length - e), u = u.substring(0, u.length - e), t = s + t.substring(0, t.length - e), r = s + r);
      for (var o = u, l = t, h = r, a = f(u, t) + f(t, r); t.charAt(0) === r.charAt(0);) u += t.charAt(0), t = t.substring(1) + r.charAt(0), r = r.substring(1), c = f(u, t) + f(t, r), c >= a && (a = c, o = u, l = t, h = r);
      n[i - 1][1] != o && (o ? n[i - 1][1] = o : (n.splice(i - 1, 1), i--), n[i][1] = l, h ? n[i + 1][1] = h : (n.splice(i + 1, 1), i--))
    }
    i++
  }
};
diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
diff_match_patch.whitespaceRegex_ = /\s/;
diff_match_patch.linebreakRegex_ = /[\r\n]/;
diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;
diff_match_patch.prototype.diff_cleanupEfficiency = function(n) {
  for (var h = !1, e = [], t = 0, f = null, i = 0, o = !1, s = !1, r = !1, u = !1; i < n.length;) n[i][0] == DIFF_EQUAL ? (n[i][1].length < this.Diff_EditCost && (r || u) ? (e[t++] = i, o = r, s = u, f = n[i][1]) : (t = 0, f = null), r = u = !1) : (n[i][0] == DIFF_DELETE ? u = !0 : r = !0, f && (o && s && r && u || f.length < this.Diff_EditCost / 2 && o + s + r + u == 3) && (n.splice(e[t - 1], 0, [DIFF_DELETE, f]), n[e[t - 1] + 1][0] = DIFF_INSERT, t--, f = null, o && s ? (r = u = !0, t = 0) : (t--, i = t > 0 ? e[t - 1] : -1, r = u = !1), h = !0)), i++;
  h && this.diff_cleanupMerge(n)
};
diff_match_patch.prototype.diff_cleanupMerge = function(n) {
  var o;
  n.push([DIFF_EQUAL, ""]);
  for (var t = 0, i = 0, r = 0, f = "", u = "", e; t < n.length;) switch (n[t][0]) {
    case DIFF_INSERT:
      r++;
      u += n[t][1];
      t++;
      break;
    case DIFF_DELETE:
      i++;
      f += n[t][1];
      t++;
      break;
    case DIFF_EQUAL:
      i + r > 1 ? (i !== 0 && r !== 0 && (e = this.diff_commonPrefix(u, f), e !== 0 && (t - i - r > 0 && n[t - i - r - 1][0] == DIFF_EQUAL ? n[t - i - r - 1][1] += u.substring(0, e) : (n.splice(0, 0, [DIFF_EQUAL, u.substring(0, e)]), t++), u = u.substring(e), f = f.substring(e)), e = this.diff_commonSuffix(u, f), e !== 0 && (n[t][1] = u.substring(u.length - e) + n[t][1], u = u.substring(0, u.length - e), f = f.substring(0, f.length - e))), i === 0 ? n.splice(t - r, i + r, [DIFF_INSERT, u]) : r === 0 ? n.splice(t - i, i + r, [DIFF_DELETE, f]) : n.splice(t - i - r, i + r, [DIFF_DELETE, f], [DIFF_INSERT, u]), t = t - i - r + (i ? 1 : 0) + (r ? 1 : 0) + 1) : t !== 0 && n[t - 1][0] == DIFF_EQUAL ? (n[t - 1][1] += n[t][1], n.splice(t, 1)) : t++;
      r = 0;
      i = 0;
      f = "";
      u = ""
  }
  for (n[n.length - 1][1] === "" && n.pop(), o = !1, t = 1; t < n.length - 1;) n[t - 1][0] == DIFF_EQUAL && n[t + 1][0] == DIFF_EQUAL && (n[t][1].substring(n[t][1].length - n[t - 1][1].length) == n[t - 1][1] ? (n[t][1] = n[t - 1][1] + n[t][1].substring(0, n[t][1].length - n[t - 1][1].length), n[t + 1][1] = n[t - 1][1] + n[t + 1][1], n.splice(t - 1, 1), o = !0) : n[t][1].substring(0, n[t + 1][1].length) == n[t + 1][1] && (n[t - 1][1] += n[t + 1][1], n[t][1] = n[t][1].substring(n[t + 1][1].length) + n[t + 1][1], n.splice(t + 1, 1), o = !0)), t++;
  o && this.diff_cleanupMerge(n)
};
diff_match_patch.prototype.diff_xIndex = function(n, t) {
  for (var r = 0, f = 0, e = 0, u = 0, i = 0; i < n.length; i++) {
    if (n[i][0] !== DIFF_INSERT && (r += n[i][1].length), n[i][0] !== DIFF_DELETE && (f += n[i][1].length), r > t) break;
    e = r;
    u = f
  }
  return n.length != i && n[i][0] === DIFF_DELETE ? u : u + (t - e)
};
diff_match_patch.prototype.diff_prettyHtml = function(n) {
  for (var i = [], u = /&/g, f = /</g, e = />/g, o = /\n/g, t = 0; t < n.length; t++) {
    var s = n[t][0],
      h = n[t][1],
      r = h.replace(u, "&amp;").replace(f, "&lt;").replace(e, "&gt;").replace(o, "&para;<br>");
    switch (s) {
      case DIFF_INSERT:
        i[t] = '<ins style="background:#e6ffe6;">' + r + "<\/ins>";
        break;
      case DIFF_DELETE:
        i[t] = '<del style="background:#ffe6e6;">' + r + "<\/del>";
        break;
      case DIFF_EQUAL:
        i[t] = "<span>" + r + "<\/span>"
    }
  }
  return i.join("")
};
diff_match_patch.prototype.diff_text1 = function(n) {
  for (var i = [], t = 0; t < n.length; t++) n[t][0] !== DIFF_INSERT && (i[t] = n[t][1]);
  return i.join("")
};
diff_match_patch.prototype.diff_text2 = function(n) {
  for (var i = [], t = 0; t < n.length; t++) n[t][0] !== DIFF_DELETE && (i[t] = n[t][1]);
  return i.join("")
};
diff_match_patch.prototype.diff_levenshtein = function(n) {
  for (var f = 0, i = 0, r = 0, e, u, t = 0; t < n.length; t++) {
    e = n[t][0];
    u = n[t][1];
    switch (e) {
      case DIFF_INSERT:
        i += u.length;
        break;
      case DIFF_DELETE:
        r += u.length;
        break;
      case DIFF_EQUAL:
        f += Math.max(i, r);
        i = 0;
        r = 0
    }
  }
  return f + Math.max(i, r)
};
diff_match_patch.prototype.diff_toDelta = function(n) {
  for (var i = [], t = 0; t < n.length; t++) switch (n[t][0]) {
    case DIFF_INSERT:
      i[t] = "+" + encodeURI(n[t][1]);
      break;
    case DIFF_DELETE:
      i[t] = "-" + n[t][1].length;
      break;
    case DIFF_EQUAL:
      i[t] = "=" + n[t][1].length
  }
  return i.join("\t").replace(/%20/g, " ")
};
diff_match_patch.prototype.diff_fromDelta = function(n, t) {
  for (var o = [], h = 0, f = 0, r = t.split(/\t/g), u, e, s, i = 0; i < r.length; i++) {
    u = r[i].substring(1);
    switch (r[i].charAt(0)) {
      case "+":
        try {
          o[h++] = [DIFF_INSERT, decodeURI(u)]
        } catch (c) {
          throw new Error("Illegal escape in diff_fromDelta: " + u);
        }
        break;
      case "-":
      case "=":
        if (e = parseInt(u, 10), isNaN(e) || e < 0) throw new Error("Invalid number in diff_fromDelta: " + u);
        s = n.substring(f, f += e);
        o[h++] = r[i].charAt(0) == "=" ? [DIFF_EQUAL, s] : [DIFF_DELETE, s];
        break;
      default:
        if (r[i]) throw new Error("Invalid diff operation in diff_fromDelta: " + r[i]);
    }
  }
  if (f != n.length) throw new Error("Delta length (" + f + ") does not equal source text length (" + n.length + ").");
  return o
};
diff_match_patch.prototype.match_main = function(n, t, i) {
  if (n == null || t == null || i == null) throw new Error("Null input. (match_main)");
  return i = Math.max(0, Math.min(i, n.length)), n == t ? 0 : n.length ? n.substring(i, i + t.length) == t ? i : this.match_bitap_(n, t, i) : -1
};
diff_match_patch.prototype.match_bitap_ = function(n, t, i) {
  function h(n, r) {
    var u = n / t.length,
      f = Math.abs(i - r);
    return v.Match_Distance ? u + f / v.Match_Distance : f ? 1 : u
  }
  var b, v, f, u, k, c, e, l, a, o, r, p, w;
  if (t.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
  for (b = this.match_alphabet_(t), v = this, f = this.Match_Threshold, u = n.indexOf(t, i), u != -1 && (f = Math.min(h(0, u), f), u = n.lastIndexOf(t, i + t.length), u != -1 && (f = Math.min(h(0, u), f))), k = 1 << t.length - 1, u = -1, l = t.length + n.length, o = 0; o < t.length; o++) {
    for (c = 0, e = l; c < e;) h(o, i + e) <= f ? c = e : l = e, e = Math.floor((l - c) / 2 + c);
    l = e;
    var d = Math.max(1, i - e + 1),
      y = Math.min(i + e, n.length) + t.length,
      s = Array(y + 2);
    for (s[y + 1] = (1 << o) - 1, r = y; r >= d; r--)
      if (p = b[n.charAt(r - 1)], s[r] = o === 0 ? (s[r + 1] << 1 | 1) & p : (s[r + 1] << 1 | 1) & p | (a[r + 1] | a[r]) << 1 | 1 | a[r + 1], s[r] & k && (w = h(o, r - 1), w <= f))
        if (f = w, u = r - 1, u > i) d = Math.max(1, 2 * i - u);
        else break;
    if (h(o + 1, i) > f) break;
    a = s
  }
  return u
};
diff_match_patch.prototype.match_alphabet_ = function(n) {
  for (var i = {}, t = 0; t < n.length; t++) i[n.charAt(t)] = 0;
  for (t = 0; t < n.length; t++) i[n.charAt(t)] |= 1 << n.length - t - 1;
  return i
};
diff_match_patch.prototype.patch_addContext_ = function(n, t) {
  var u, i, r, f;
  if (t.length != 0) {
    for (u = t.substring(n.start2, n.start2 + n.length1), i = 0; t.indexOf(u) != t.lastIndexOf(u) && u.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) i += this.Patch_Margin, u = t.substring(n.start2 - i, n.start2 + n.length1 + i);
    i += this.Patch_Margin;
    r = t.substring(n.start2 - i, n.start2);
    r && n.diffs.unshift([DIFF_EQUAL, r]);
    f = t.substring(n.start2 + n.length1, n.start2 + n.length1 + i);
    f && n.diffs.push([DIFF_EQUAL, f]);
    n.start1 -= r.length;
    n.start2 -= r.length;
    n.length1 += r.length + f.length;
    n.length2 += r.length + f.length
  }
};
diff_match_patch.prototype.patch_make = function(n, t, i) {
  var s, r, e, l, f;
  if (typeof n == "string" && typeof t == "string" && typeof i == "undefined") s = n, r = this.diff_main(s, t, !0), r.length > 2 && (this.diff_cleanupSemantic(r), this.diff_cleanupEfficiency(r));
  else if (n && typeof n == "object" && typeof t == "undefined" && typeof i == "undefined") r = n, s = this.diff_text1(r);
  else if (typeof n == "string" && t && typeof t == "object" && typeof i == "undefined") s = n, r = t;
  else if (typeof n == "string" && typeof t == "string" && i && typeof i == "object") s = n, r = i;
  else throw new Error("Unknown call format to patch_make.");
  if (r.length === 0) return [];
  var a = [],
    u = new diff_match_patch.patch_obj,
    o = 0,
    v = 0,
    h = 0,
    y = s,
    c = s;
  for (e = 0; e < r.length; e++) {
    l = r[e][0];
    f = r[e][1];
    o || l === DIFF_EQUAL || (u.start1 = v, u.start2 = h);
    switch (l) {
      case DIFF_INSERT:
        u.diffs[o++] = r[e];
        u.length2 += f.length;
        c = c.substring(0, h) + f + c.substring(h);
        break;
      case DIFF_DELETE:
        u.length1 += f.length;
        u.diffs[o++] = r[e];
        c = c.substring(0, h) + c.substring(h + f.length);
        break;
      case DIFF_EQUAL:
        f.length <= 2 * this.Patch_Margin && o && r.length != e + 1 ? (u.diffs[o++] = r[e], u.length1 += f.length, u.length2 += f.length) : f.length >= 2 * this.Patch_Margin && o && (this.patch_addContext_(u, y), a.push(u), u = new diff_match_patch.patch_obj, o = 0, y = c, v = h)
    }
    l !== DIFF_INSERT && (v += f.length);
    l !== DIFF_DELETE && (h += f.length)
  }
  return o && (this.patch_addContext_(u, y), a.push(u)), a
};
diff_match_patch.prototype.patch_deepCopy = function(n) {
  for (var f = [], i, t, u, r = 0; r < n.length; r++) {
    for (i = n[r], t = new diff_match_patch.patch_obj, t.diffs = [], u = 0; u < i.diffs.length; u++) t.diffs[u] = i.diffs[u].slice();
    t.start1 = i.start1;
    t.start2 = i.start2;
    t.length1 = i.length1;
    t.length2 = i.length2;
    f[r] = t
  }
  return f
};
diff_match_patch.prototype.patch_apply = function(n, t) {
  var e, c, o, r, p, h, a, v, y, f;
  if (n.length == 0) return [t, []];
  for (n = this.patch_deepCopy(n), e = this.patch_addPadding(n), t = e + t + e, this.patch_splitMax(n), c = 0, o = [], r = 0; r < n.length; r++) {
    var l = n[r].start2 + c,
      u = this.diff_text1(n[r].diffs),
      i, s = -1;
    if (u.length > this.Match_MaxBits ? (i = this.match_main(t, u.substring(0, this.Match_MaxBits), l), i != -1 && (s = this.match_main(t, u.substring(u.length - this.Match_MaxBits), l + u.length - this.Match_MaxBits), (s == -1 || i >= s) && (i = -1))) : i = this.match_main(t, u, l), i == -1) o[r] = !1, c -= n[r].length2 - n[r].length1;
    else if (o[r] = !0, c = i - l, p = s == -1 ? t.substring(i, i + u.length) : t.substring(i, s + this.Match_MaxBits), u == p) t = t.substring(0, i) + this.diff_text2(n[r].diffs) + t.substring(i + u.length);
    else if (h = this.diff_main(u, p, !1), u.length > this.Match_MaxBits && this.diff_levenshtein(h) / u.length > this.Patch_DeleteThreshold) o[r] = !1;
    else
      for (this.diff_cleanupSemanticLossless(h), a = 0, y = 0; y < n[r].diffs.length; y++) f = n[r].diffs[y], f[0] !== DIFF_EQUAL && (v = this.diff_xIndex(h, a)), f[0] === DIFF_INSERT ? t = t.substring(0, i + v) + f[1] + t.substring(i + v) : f[0] === DIFF_DELETE && (t = t.substring(0, i + v) + t.substring(i + this.diff_xIndex(h, a + f[1].length))), f[0] !== DIFF_DELETE && (a += f[1].length)
  }
  return t = t.substring(e.length, t.length - e.length), [t, o]
};
diff_match_patch.prototype.patch_addPadding = function(n) {
  for (var r = this.Patch_Margin, e = "", i, t, f, u = 1; u <= r; u++) e += String.fromCharCode(u);
  for (u = 0; u < n.length; u++) n[u].start1 += r, n[u].start2 += r;
  return i = n[0], t = i.diffs, t.length == 0 || t[0][0] != DIFF_EQUAL ? (t.unshift([DIFF_EQUAL, e]), i.start1 -= r, i.start2 -= r, i.length1 += r, i.length2 += r) : r > t[0][1].length && (f = r - t[0][1].length, t[0][1] = e.substring(t[0][1].length) + t[0][1], i.start1 -= f, i.start2 -= f, i.length1 += f, i.length2 += f), i = n[n.length - 1], t = i.diffs, t.length == 0 || t[t.length - 1][0] != DIFF_EQUAL ? (t.push([DIFF_EQUAL, e]), i.length1 += r, i.length2 += r) : r > t[t.length - 1][1].length && (f = r - t[t.length - 1][1].length, t[t.length - 1][1] += e.substring(0, f), i.length1 += f, i.length2 += f), e
};
diff_match_patch.prototype.patch_splitMax = function(n) {
  for (var h = this.Match_MaxBits, r, t, s, e, i, o, f = 0; f < n.length; f++)
    if (!(n[f].length1 <= h)) {
      r = n[f];
      n.splice(f--, 1);
      for (var c = r.start1, l = r.start2, u = ""; r.diffs.length !== 0;) {
        for (t = new diff_match_patch.patch_obj, s = !0, t.start1 = c - u.length, t.start2 = l - u.length, u !== "" && (t.length1 = t.length2 = u.length, t.diffs.push([DIFF_EQUAL, u])); r.diffs.length !== 0 && t.length1 < h - this.Patch_Margin;) e = r.diffs[0][0], i = r.diffs[0][1], e === DIFF_INSERT ? (t.length2 += i.length, l += i.length, t.diffs.push(r.diffs.shift()), s = !1) : e === DIFF_DELETE && t.diffs.length == 1 && t.diffs[0][0] == DIFF_EQUAL && i.length > 2 * h ? (t.length1 += i.length, c += i.length, s = !1, t.diffs.push([e, i]), r.diffs.shift()) : (i = i.substring(0, h - t.length1 - this.Patch_Margin), t.length1 += i.length, c += i.length, e === DIFF_EQUAL ? (t.length2 += i.length, l += i.length) : s = !1, t.diffs.push([e, i]), i == r.diffs[0][1] ? r.diffs.shift() : r.diffs[0][1] = r.diffs[0][1].substring(i.length));
        u = this.diff_text2(t.diffs);
        u = u.substring(u.length - this.Patch_Margin);
        o = this.diff_text1(r.diffs).substring(0, this.Patch_Margin);
        o !== "" && (t.length1 += o.length, t.length2 += o.length, t.diffs.length !== 0 && t.diffs[t.diffs.length - 1][0] === DIFF_EQUAL ? t.diffs[t.diffs.length - 1][1] += o : t.diffs.push([DIFF_EQUAL, o]));
        s || n.splice(++f, 0, t)
      }
    }
};
diff_match_patch.prototype.patch_toText = function(n) {
  for (var i = [], t = 0; t < n.length; t++) i[t] = n[t];
  return i.join("")
};
diff_match_patch.prototype.patch_fromText = function(n) {
  var o = [],
    i, t, u, e;
  if (!n) return o;
  for (var f = n.split("\n"), r = 0; r < f.length;) {
    if (i = f[r].match(/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/), !i) throw new Error("Invalid patch string: " + f[r]);
    for (t = new diff_match_patch.patch_obj, o.push(t), t.start1 = parseInt(i[1], 10), i[2] === "" ? (t.start1--, t.length1 = 1) : i[2] == "0" ? t.length1 = 0 : (t.start1--, t.length1 = parseInt(i[2], 10)), t.start2 = parseInt(i[3], 10), i[4] === "" ? (t.start2--, t.length2 = 1) : i[4] == "0" ? t.length2 = 0 : (t.start2--, t.length2 = parseInt(i[4], 10)), r++; r < f.length;) {
      u = f[r].charAt(0);
      try {
        e = decodeURI(f[r].substring(1))
      } catch (s) {
        throw new Error("Illegal escape in patch_fromText: " + e);
      }
      if (u == "-") t.diffs.push([DIFF_DELETE, e]);
      else if (u == "+") t.diffs.push([DIFF_INSERT, e]);
      else if (u == " ") t.diffs.push([DIFF_EQUAL, e]);
      else if (u == "@") break;
      else if (u !== "") throw new Error('Invalid patch mode "' + u + '" in: ' + e);
      r++
    }
  }
  return o
};
diff_match_patch.patch_obj = function() {
  this.diffs = [];
  this.start1 = null;
  this.start2 = null;
  this.length1 = 0;
  this.length2 = 0
};
diff_match_patch.patch_obj.prototype.toString = function() {
  var r, u, i, t, n;
  for (r = this.length1 === 0 ? this.start1 + ",0" : this.length1 == 1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1, u = this.length2 === 0 ? this.start2 + ",0" : this.length2 == 1 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2, i = ["@@ -" + r + " +" + u + " @@\n"], n = 0; n < this.diffs.length; n++) {
    switch (this.diffs[n][0]) {
      case DIFF_INSERT:
        t = "+";
        break;
      case DIFF_DELETE:
        t = "-";
        break;
      case DIFF_EQUAL:
        t = " "
    }
    i[n + 1] = t + encodeURI(this.diffs[n][1]) + "\n"
  }
  return i.join("").replace(/%20/g, " ")
};
this.diff_match_patch = diff_match_patch;
this.DIFF_DELETE = DIFF_DELETE;
this.DIFF_INSERT = DIFF_INSERT;
this.DIFF_EQUAL = DIFF_EQUAL,
  function() {
    function t() {
      return cwf.CompareTexts = new n, cwf.CompareTexts
    }
    var n;
    n = function() {
      function n() {
        this.initialize()
      }
      return n.prototype = {
        initialize: function() {
          $(".compare-text").click(this.compare_texts)
        },
        compare_texts: function() {
          cwf.CompareTexts.updateStatistics(1);
          cwf.CompareTexts.updateStatistics(2);
          cwf.CompareTexts.diff_lineMode($(".text1").val(), $(".text2").val())
        },
        diff_lineMode: function(n, t) {
          var u = new diff_match_patch,
            i = u.diff_main(n, t),
            r;
          return u.diff_cleanupSemantic(i), r = cwf.CompareTexts.make_html_variants(i), $(".output").html(r.common), $(".first-text").html(r.first), $(".second-text").html(r.second), $("#levenshtein").text(u.diff_levenshtein(i)), i
        },
        updateStatistics: function(n) {
          var t = $(".text" + n).val(),
            i = t.length,
            r = cwf.Statistics.getWords(t);
          $("#statTextWords" + n).text(r.length);
          $("#statTextCharacters" + n).text(i)
        },
        make_html_variants: function(n) {
          for (var r = [], u = [], f = [], e = /&/g, o = /</g, s = />/g, h = /\n/g, i = 0; i < n.length; i++) {
            var c = n[i][0],
              l = n[i][1],
              t = l.replace(e, "&amp;").replace(o, "&lt;").replace(s, "&gt;").replace(h, "&para;<br>");
            switch (c) {
              case DIFF_INSERT:
                t = '<span class="diff-insertion">' + t + "<\/span>";
                r.push(t);
                f.push(t);
                break;
              case DIFF_DELETE:
                t = '<span class="diff-deletion">' + t + "<\/span>";
                r.push(t);
                u.push(t);
                break;
              case DIFF_EQUAL:
                r.push(t);
                u.push(t);
                f.push(t)
            }
          }
          return {
            common: r.join(""),
            first: u.join(""),
            second: f.join("")
          }
        }
      }, n
    }();
    $(document).ready(t)
  }.call(),
  function() {
    function t() {
      return cwf.FCreen = new n, cwf.CompareTexts
    }
    var n;
    n = function() {
      function t() {
        n = this;
        this.initialize()
      }
      var n = null;
      return t.prototype = {
        initialize: function() {
          n.IsSupported() ? ($(".fullscreen").click(n.enter), $(".fullscreen-minimize").click(n.escape)) : ($(".fullscreen").hide(), $(".fullscreen-minimize").hide());
          $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function() {
            n.isFull ? n.escape() : n.isFull = !0
          })
        },
        IsSupported: function() {
          var n = $(document).find(".fullscreen-container").get(0);
          return n && (typeof n.requestFullscreen == "function" || typeof n.mozRequestFullScreen == "function" || typeof n.webkitRequestFullscreen == "function" || typeof n.msRequestFullscreen == "function") ? typeof document.exitFullscreen == "function" || typeof document.mozCancelFullScreen == "function" || typeof document.webkitExitFullscreen == "function" : !1
        },
        enter: function() {
          var t = $(this).closest(".fullscreen-container").get(0),
            i = null;
          n.isFull && n.escape();
          t && (t.requestFullscreen ? i = t.requestFullscreen.bind(t) : t.mozRequestFullScreen ? i = t.mozRequestFullScreen.bind(t) : t.webkitRequestFullscreen ? i = t.webkitRequestFullscreen.bind(t) : t.msRequestFullscreen && (i = t.msRequestFullscreen.bind(t)));
          i && (i(), n.element = t, $(n.element).addClass("fullscreen-area"), $(".fullscreen").hide(), $(".fullscreen-minimize").show())
        },
        escape: function() {
          document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
          n.element && (n.isFull = !1, $(n.element).removeClass("fullscreen-area"), $(".fullscreen").show(), $(".fullscreen-minimize").hide())
        },
        element: null,
        fs_function: null,
        isFull: !1
      }, t
    }();
    $(document).ready(t)
  }.call(),
  function() {
    function t() {
      return cwf.Helpers = new n, cwf.Helpers
    }
    var n;
    n = function() {
      function n() {
        this.initialize()
      }
      return n.prototype = {
        initialize: function() {},
        bytesToSize: function(n) {
          var t;
          return n == 0 ? "0 Byte" : (t = parseInt(Math.floor(Math.log(n) / Math.log(1024))), Math.round(n / Math.pow(1024, t), 2) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t])
        },
        parseXML: function(n) {
          var t, i;
          if (!n || typeof n != "string") return null;
          try {
            window.DOMParser ? (i = new DOMParser, t = i.parseFromString(n, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n))
          } catch (r) {
            t = undefined
          }
          return t && t.documentElement && !t.getElementsByTagName("parsererror").length || (t && t.documentElement && t.getElementsByTagName("parsererror").length ? jQuery.error("Invalid XML." + t.getElementsByTagName("parsererror")[0].innerText) : jQuery.error("Invalid XML.")), t
        }
      }, n
    }();
    $(document).ready(t)
  }.call()
