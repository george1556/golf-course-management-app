exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("customers_tee_times")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers_tee_times").insert([
        {
          customer_id: 142,
          tee_time_id: 326
        },
        {
          customer_id: 290,
          tee_time_id: 467
        },
        {
          customer_id: 29,
          tee_time_id: 119
        },
        {
          customer_id: 243,
          tee_time_id: 48
        },
        {
          customer_id: 224,
          tee_time_id: 278
        },
        {
          customer_id: 19,
          tee_time_id: 386
        },
        {
          customer_id: 285,
          tee_time_id: 404
        },
        {
          customer_id: 283,
          tee_time_id: 273
        },
        {
          customer_id: 195,
          tee_time_id: 329
        },
        {
          customer_id: 100,
          tee_time_id: 209
        },
        {
          customer_id: 121,
          tee_time_id: 370
        },
        {
          customer_id: 59,
          tee_time_id: 149
        },
        {
          customer_id: 32,
          tee_time_id: 239
        },
        {
          customer_id: 173,
          tee_time_id: 409
        },
        {
          customer_id: 153,
          tee_time_id: 8
        },
        {
          customer_id: 256,
          tee_time_id: 64
        },
        {
          customer_id: 145,
          tee_time_id: 312
        },
        {
          customer_id: 71,
          tee_time_id: 344
        },
        {
          customer_id: 98,
          tee_time_id: 426
        },
        {
          customer_id: 42,
          tee_time_id: 336
        },
        {
          customer_id: 287,
          tee_time_id: 24
        },
        {
          customer_id: 84,
          tee_time_id: 409
        },
        {
          customer_id: 292,
          tee_time_id: 399
        },
        {
          customer_id: 35,
          tee_time_id: 383
        },
        {
          customer_id: 153,
          tee_time_id: 333
        },
        {
          customer_id: 125,
          tee_time_id: 151
        },
        {
          customer_id: 82,
          tee_time_id: 388
        },
        {
          customer_id: 22,
          tee_time_id: 239
        },
        {
          customer_id: 122,
          tee_time_id: 223
        },
        {
          customer_id: 109,
          tee_time_id: 138
        },
        {
          customer_id: 148,
          tee_time_id: 241
        },
        {
          customer_id: 161,
          tee_time_id: 230
        },
        {
          customer_id: 35,
          tee_time_id: 418
        },
        {
          customer_id: 241,
          tee_time_id: 238
        },
        {
          customer_id: 8,
          tee_time_id: 90
        },
        {
          customer_id: 134,
          tee_time_id: 70
        },
        {
          customer_id: 89,
          tee_time_id: 329
        },
        {
          customer_id: 74,
          tee_time_id: 326
        },
        {
          customer_id: 223,
          tee_time_id: 113
        },
        {
          customer_id: 46,
          tee_time_id: 116
        },
        {
          customer_id: 120,
          tee_time_id: 482
        },
        {
          customer_id: 146,
          tee_time_id: 489
        },
        {
          customer_id: 128,
          tee_time_id: 242
        },
        {
          customer_id: 49,
          tee_time_id: 314
        },
        {
          customer_id: 237,
          tee_time_id: 101
        },
        {
          customer_id: 46,
          tee_time_id: 93
        },
        {
          customer_id: 273,
          tee_time_id: 372
        },
        {
          customer_id: 170,
          tee_time_id: 442
        },
        {
          customer_id: 232,
          tee_time_id: 242
        },
        {
          customer_id: 96,
          tee_time_id: 81
        },
        {
          customer_id: 166,
          tee_time_id: 239
        },
        {
          customer_id: 93,
          tee_time_id: 271
        },
        {
          customer_id: 283,
          tee_time_id: 259
        },
        {
          customer_id: 185,
          tee_time_id: 490
        },
        {
          customer_id: 45,
          tee_time_id: 307
        },
        {
          customer_id: 125,
          tee_time_id: 394
        },
        {
          customer_id: 92,
          tee_time_id: 169
        },
        {
          customer_id: 229,
          tee_time_id: 23
        },
        {
          customer_id: 8,
          tee_time_id: 204
        },
        {
          customer_id: 217,
          tee_time_id: 469
        },
        {
          customer_id: 286,
          tee_time_id: 115
        },
        {
          customer_id: 76,
          tee_time_id: 186
        },
        {
          customer_id: 152,
          tee_time_id: 441
        },
        {
          customer_id: 113,
          tee_time_id: 446
        },
        {
          customer_id: 291,
          tee_time_id: 459
        },
        {
          customer_id: 133,
          tee_time_id: 200
        },
        {
          customer_id: 168,
          tee_time_id: 271
        },
        {
          customer_id: 40,
          tee_time_id: 117
        },
        {
          customer_id: 102,
          tee_time_id: 57
        },
        {
          customer_id: 177,
          tee_time_id: 124
        },
        {
          customer_id: 88,
          tee_time_id: 286
        },
        {
          customer_id: 109,
          tee_time_id: 336
        },
        {
          customer_id: 24,
          tee_time_id: 98
        },
        {
          customer_id: 39,
          tee_time_id: 433
        },
        {
          customer_id: 132,
          tee_time_id: 222
        },
        {
          customer_id: 75,
          tee_time_id: 455
        },
        {
          customer_id: 131,
          tee_time_id: 372
        },
        {
          customer_id: 94,
          tee_time_id: 467
        },
        {
          customer_id: 263,
          tee_time_id: 244
        },
        {
          customer_id: 125,
          tee_time_id: 57
        },
        {
          customer_id: 252,
          tee_time_id: 266
        },
        {
          customer_id: 266,
          tee_time_id: 145
        },
        {
          customer_id: 119,
          tee_time_id: 437
        },
        {
          customer_id: 74,
          tee_time_id: 122
        },
        {
          customer_id: 103,
          tee_time_id: 483
        },
        {
          customer_id: 296,
          tee_time_id: 60
        },
        {
          customer_id: 75,
          tee_time_id: 83
        },
        {
          customer_id: 255,
          tee_time_id: 411
        },
        {
          customer_id: 227,
          tee_time_id: 97
        },
        {
          customer_id: 266,
          tee_time_id: 482
        },
        {
          customer_id: 269,
          tee_time_id: 345
        },
        {
          customer_id: 68,
          tee_time_id: 409
        },
        {
          customer_id: 70,
          tee_time_id: 44
        },
        {
          customer_id: 245,
          tee_time_id: 425
        },
        {
          customer_id: 199,
          tee_time_id: 31
        },
        {
          customer_id: 213,
          tee_time_id: 79
        },
        {
          customer_id: 137,
          tee_time_id: 308
        },
        {
          customer_id: 99,
          tee_time_id: 493
        },
        {
          customer_id: 26,
          tee_time_id: 242
        },
        {
          customer_id: 211,
          tee_time_id: 380
        },
        {
          customer_id: 95,
          tee_time_id: 399
        },
        {
          customer_id: 48,
          tee_time_id: 257
        },
        {
          customer_id: 117,
          tee_time_id: 139
        },
        {
          customer_id: 176,
          tee_time_id: 133
        },
        {
          customer_id: 54,
          tee_time_id: 108
        },
        {
          customer_id: 274,
          tee_time_id: 83
        },
        {
          customer_id: 128,
          tee_time_id: 253
        },
        {
          customer_id: 258,
          tee_time_id: 473
        },
        {
          customer_id: 7,
          tee_time_id: 480
        },
        {
          customer_id: 115,
          tee_time_id: 146
        },
        {
          customer_id: 30,
          tee_time_id: 354
        },
        {
          customer_id: 75,
          tee_time_id: 451
        },
        {
          customer_id: 91,
          tee_time_id: 232
        },
        {
          customer_id: 10,
          tee_time_id: 237
        },
        {
          customer_id: 200,
          tee_time_id: 365
        },
        {
          customer_id: 235,
          tee_time_id: 106
        },
        {
          customer_id: 33,
          tee_time_id: 473
        },
        {
          customer_id: 160,
          tee_time_id: 313
        },
        {
          customer_id: 104,
          tee_time_id: 10
        },
        {
          customer_id: 269,
          tee_time_id: 350
        },
        {
          customer_id: 131,
          tee_time_id: 356
        },
        {
          customer_id: 77,
          tee_time_id: 474
        },
        {
          customer_id: 59,
          tee_time_id: 426
        },
        {
          customer_id: 82,
          tee_time_id: 263
        },
        {
          customer_id: 107,
          tee_time_id: 497
        },
        {
          customer_id: 276,
          tee_time_id: 328
        },
        {
          customer_id: 228,
          tee_time_id: 336
        },
        {
          customer_id: 116,
          tee_time_id: 135
        },
        {
          customer_id: 70,
          tee_time_id: 74
        },
        {
          customer_id: 119,
          tee_time_id: 368
        },
        {
          customer_id: 218,
          tee_time_id: 411
        },
        {
          customer_id: 118,
          tee_time_id: 154
        },
        {
          customer_id: 14,
          tee_time_id: 360
        },
        {
          customer_id: 277,
          tee_time_id: 367
        },
        {
          customer_id: 70,
          tee_time_id: 413
        },
        {
          customer_id: 66,
          tee_time_id: 169
        },
        {
          customer_id: 295,
          tee_time_id: 466
        },
        {
          customer_id: 122,
          tee_time_id: 280
        },
        {
          customer_id: 285,
          tee_time_id: 125
        },
        {
          customer_id: 114,
          tee_time_id: 40
        },
        {
          customer_id: 75,
          tee_time_id: 37
        },
        {
          customer_id: 286,
          tee_time_id: 400
        },
        {
          customer_id: 272,
          tee_time_id: 457
        },
        {
          customer_id: 233,
          tee_time_id: 96
        },
        {
          customer_id: 3,
          tee_time_id: 275
        },
        {
          customer_id: 30,
          tee_time_id: 175
        },
        {
          customer_id: 193,
          tee_time_id: 304
        },
        {
          customer_id: 126,
          tee_time_id: 83
        },
        {
          customer_id: 281,
          tee_time_id: 378
        },
        {
          customer_id: 97,
          tee_time_id: 40
        },
        {
          customer_id: 161,
          tee_time_id: 433
        },
        {
          customer_id: 203,
          tee_time_id: 309
        },
        {
          customer_id: 61,
          tee_time_id: 166
        },
        {
          customer_id: 40,
          tee_time_id: 420
        },
        {
          customer_id: 182,
          tee_time_id: 195
        },
        {
          customer_id: 131,
          tee_time_id: 108
        },
        {
          customer_id: 83,
          tee_time_id: 346
        },
        {
          customer_id: 155,
          tee_time_id: 449
        },
        {
          customer_id: 223,
          tee_time_id: 370
        },
        {
          customer_id: 35,
          tee_time_id: 26
        },
        {
          customer_id: 174,
          tee_time_id: 470
        },
        {
          customer_id: 126,
          tee_time_id: 56
        },
        {
          customer_id: 276,
          tee_time_id: 212
        },
        {
          customer_id: 193,
          tee_time_id: 199
        },
        {
          customer_id: 238,
          tee_time_id: 189
        },
        {
          customer_id: 36,
          tee_time_id: 360
        },
        {
          customer_id: 56,
          tee_time_id: 305
        },
        {
          customer_id: 31,
          tee_time_id: 198
        },
        {
          customer_id: 157,
          tee_time_id: 3
        },
        {
          customer_id: 283,
          tee_time_id: 463
        },
        {
          customer_id: 257,
          tee_time_id: 53
        },
        {
          customer_id: 194,
          tee_time_id: 333
        },
        {
          customer_id: 48,
          tee_time_id: 77
        },
        {
          customer_id: 196,
          tee_time_id: 412
        },
        {
          customer_id: 249,
          tee_time_id: 147
        },
        {
          customer_id: 134,
          tee_time_id: 339
        },
        {
          customer_id: 106,
          tee_time_id: 355
        },
        {
          customer_id: 269,
          tee_time_id: 424
        },
        {
          customer_id: 89,
          tee_time_id: 8
        },
        {
          customer_id: 95,
          tee_time_id: 421
        },
        {
          customer_id: 125,
          tee_time_id: 185
        },
        {
          customer_id: 238,
          tee_time_id: 3
        },
        {
          customer_id: 8,
          tee_time_id: 57
        },
        {
          customer_id: 102,
          tee_time_id: 210
        },
        {
          customer_id: 178,
          tee_time_id: 200
        },
        {
          customer_id: 88,
          tee_time_id: 50
        },
        {
          customer_id: 262,
          tee_time_id: 299
        },
        {
          customer_id: 246,
          tee_time_id: 311
        },
        {
          customer_id: 152,
          tee_time_id: 158
        },
        {
          customer_id: 241,
          tee_time_id: 261
        },
        {
          customer_id: 186,
          tee_time_id: 368
        },
        {
          customer_id: 92,
          tee_time_id: 492
        },
        {
          customer_id: 163,
          tee_time_id: 101
        },
        {
          customer_id: 260,
          tee_time_id: 379
        },
        {
          customer_id: 72,
          tee_time_id: 472
        },
        {
          customer_id: 171,
          tee_time_id: 186
        },
        {
          customer_id: 285,
          tee_time_id: 463
        },
        {
          customer_id: 48,
          tee_time_id: 427
        },
        {
          customer_id: 99,
          tee_time_id: 9
        },
        {
          customer_id: 3,
          tee_time_id: 286
        },
        {
          customer_id: 240,
          tee_time_id: 130
        },
        {
          customer_id: 273,
          tee_time_id: 179
        },
        {
          customer_id: 176,
          tee_time_id: 34
        },
        {
          customer_id: 211,
          tee_time_id: 149
        },
        {
          customer_id: 173,
          tee_time_id: 126
        },
        {
          customer_id: 18,
          tee_time_id: 257
        },
        {
          customer_id: 64,
          tee_time_id: 381
        },
        {
          customer_id: 297,
          tee_time_id: 157
        },
        {
          customer_id: 158,
          tee_time_id: 453
        },
        {
          customer_id: 242,
          tee_time_id: 439
        },
        {
          customer_id: 282,
          tee_time_id: 252
        },
        {
          customer_id: 101,
          tee_time_id: 211
        },
        {
          customer_id: 129,
          tee_time_id: 15
        },
        {
          customer_id: 224,
          tee_time_id: 55
        },
        {
          customer_id: 26,
          tee_time_id: 428
        },
        {
          customer_id: 130,
          tee_time_id: 209
        },
        {
          customer_id: 269,
          tee_time_id: 312
        },
        {
          customer_id: 91,
          tee_time_id: 127
        },
        {
          customer_id: 3,
          tee_time_id: 445
        },
        {
          customer_id: 293,
          tee_time_id: 443
        },
        {
          customer_id: 69,
          tee_time_id: 350
        },
        {
          customer_id: 78,
          tee_time_id: 330
        },
        {
          customer_id: 108,
          tee_time_id: 76
        },
        {
          customer_id: 66,
          tee_time_id: 144
        },
        {
          customer_id: 158,
          tee_time_id: 76
        },
        {
          customer_id: 209,
          tee_time_id: 445
        },
        {
          customer_id: 167,
          tee_time_id: 421
        },
        {
          customer_id: 30,
          tee_time_id: 474
        },
        {
          customer_id: 11,
          tee_time_id: 96
        },
        {
          customer_id: 201,
          tee_time_id: 343
        },
        {
          customer_id: 203,
          tee_time_id: 116
        },
        {
          customer_id: 21,
          tee_time_id: 353
        },
        {
          customer_id: 169,
          tee_time_id: 243
        },
        {
          customer_id: 247,
          tee_time_id: 53
        },
        {
          customer_id: 127,
          tee_time_id: 120
        },
        {
          customer_id: 174,
          tee_time_id: 60
        },
        {
          customer_id: 256,
          tee_time_id: 317
        },
        {
          customer_id: 122,
          tee_time_id: 255
        },
        {
          customer_id: 49,
          tee_time_id: 64
        },
        {
          customer_id: 266,
          tee_time_id: 196
        },
        {
          customer_id: 91,
          tee_time_id: 267
        },
        {
          customer_id: 127,
          tee_time_id: 371
        },
        {
          customer_id: 186,
          tee_time_id: 45
        },
        {
          customer_id: 20,
          tee_time_id: 308
        },
        {
          customer_id: 237,
          tee_time_id: 312
        },
        {
          customer_id: 279,
          tee_time_id: 157
        },
        {
          customer_id: 42,
          tee_time_id: 53
        },
        {
          customer_id: 258,
          tee_time_id: 490
        },
        {
          customer_id: 118,
          tee_time_id: 456
        },
        {
          customer_id: 14,
          tee_time_id: 238
        },
        {
          customer_id: 63,
          tee_time_id: 103
        },
        {
          customer_id: 19,
          tee_time_id: 484
        },
        {
          customer_id: 188,
          tee_time_id: 97
        },
        {
          customer_id: 134,
          tee_time_id: 298
        },
        {
          customer_id: 255,
          tee_time_id: 111
        },
        {
          customer_id: 111,
          tee_time_id: 156
        },
        {
          customer_id: 14,
          tee_time_id: 200
        },
        {
          customer_id: 247,
          tee_time_id: 449
        },
        {
          customer_id: 111,
          tee_time_id: 491
        },
        {
          customer_id: 157,
          tee_time_id: 183
        },
        {
          customer_id: 227,
          tee_time_id: 274
        },
        {
          customer_id: 240,
          tee_time_id: 64
        },
        {
          customer_id: 110,
          tee_time_id: 145
        },
        {
          customer_id: 205,
          tee_time_id: 201
        },
        {
          customer_id: 25,
          tee_time_id: 183
        },
        {
          customer_id: 37,
          tee_time_id: 253
        },
        {
          customer_id: 60,
          tee_time_id: 169
        },
        {
          customer_id: 267,
          tee_time_id: 280
        },
        {
          customer_id: 246,
          tee_time_id: 254
        },
        {
          customer_id: 3,
          tee_time_id: 468
        },
        {
          customer_id: 290,
          tee_time_id: 93
        },
        {
          customer_id: 46,
          tee_time_id: 261
        },
        {
          customer_id: 122,
          tee_time_id: 121
        },
        {
          customer_id: 300,
          tee_time_id: 462
        },
        {
          customer_id: 123,
          tee_time_id: 77
        },
        {
          customer_id: 125,
          tee_time_id: 12
        },
        {
          customer_id: 178,
          tee_time_id: 339
        },
        {
          customer_id: 123,
          tee_time_id: 412
        },
        {
          customer_id: 206,
          tee_time_id: 474
        },
        {
          customer_id: 223,
          tee_time_id: 180
        },
        {
          customer_id: 58,
          tee_time_id: 23
        },
        {
          customer_id: 201,
          tee_time_id: 215
        },
        {
          customer_id: 212,
          tee_time_id: 350
        },
        {
          customer_id: 222,
          tee_time_id: 178
        },
        {
          customer_id: 78,
          tee_time_id: 489
        },
        {
          customer_id: 190,
          tee_time_id: 217
        },
        {
          customer_id: 95,
          tee_time_id: 260
        },
        {
          customer_id: 188,
          tee_time_id: 373
        },
        {
          customer_id: 260,
          tee_time_id: 126
        },
        {
          customer_id: 22,
          tee_time_id: 311
        },
        {
          customer_id: 100,
          tee_time_id: 448
        },
        {
          customer_id: 135,
          tee_time_id: 264
        },
        {
          customer_id: 210,
          tee_time_id: 207
        },
        {
          customer_id: 20,
          tee_time_id: 163
        },
        {
          customer_id: 211,
          tee_time_id: 405
        },
        {
          customer_id: 300,
          tee_time_id: 26
        },
        {
          customer_id: 102,
          tee_time_id: 388
        },
        {
          customer_id: 253,
          tee_time_id: 57
        },
        {
          customer_id: 233,
          tee_time_id: 173
        },
        {
          customer_id: 225,
          tee_time_id: 388
        },
        {
          customer_id: 52,
          tee_time_id: 284
        },
        {
          customer_id: 158,
          tee_time_id: 404
        },
        {
          customer_id: 6,
          tee_time_id: 139
        },
        {
          customer_id: 15,
          tee_time_id: 357
        },
        {
          customer_id: 205,
          tee_time_id: 78
        },
        {
          customer_id: 267,
          tee_time_id: 248
        },
        {
          customer_id: 210,
          tee_time_id: 260
        },
        {
          customer_id: 102,
          tee_time_id: 340
        },
        {
          customer_id: 106,
          tee_time_id: 267
        },
        {
          customer_id: 137,
          tee_time_id: 209
        },
        {
          customer_id: 33,
          tee_time_id: 240
        },
        {
          customer_id: 95,
          tee_time_id: 152
        },
        {
          customer_id: 31,
          tee_time_id: 345
        },
        {
          customer_id: 178,
          tee_time_id: 261
        },
        {
          customer_id: 264,
          tee_time_id: 277
        },
        {
          customer_id: 288,
          tee_time_id: 228
        },
        {
          customer_id: 156,
          tee_time_id: 458
        },
        {
          customer_id: 291,
          tee_time_id: 327
        },
        {
          customer_id: 225,
          tee_time_id: 369
        },
        {
          customer_id: 218,
          tee_time_id: 253
        },
        {
          customer_id: 31,
          tee_time_id: 261
        },
        {
          customer_id: 166,
          tee_time_id: 61
        },
        {
          customer_id: 49,
          tee_time_id: 92
        },
        {
          customer_id: 96,
          tee_time_id: 3
        },
        {
          customer_id: 161,
          tee_time_id: 45
        },
        {
          customer_id: 289,
          tee_time_id: 201
        },
        {
          customer_id: 259,
          tee_time_id: 92
        },
        {
          customer_id: 143,
          tee_time_id: 319
        },
        {
          customer_id: 299,
          tee_time_id: 296
        },
        {
          customer_id: 132,
          tee_time_id: 67
        },
        {
          customer_id: 159,
          tee_time_id: 456
        },
        {
          customer_id: 255,
          tee_time_id: 200
        },
        {
          customer_id: 235,
          tee_time_id: 313
        },
        {
          customer_id: 68,
          tee_time_id: 479
        },
        {
          customer_id: 150,
          tee_time_id: 170
        },
        {
          customer_id: 175,
          tee_time_id: 345
        },
        {
          customer_id: 54,
          tee_time_id: 78
        },
        {
          customer_id: 221,
          tee_time_id: 295
        },
        {
          customer_id: 211,
          tee_time_id: 405
        },
        {
          customer_id: 299,
          tee_time_id: 358
        },
        {
          customer_id: 163,
          tee_time_id: 364
        },
        {
          customer_id: 134,
          tee_time_id: 55
        },
        {
          customer_id: 212,
          tee_time_id: 446
        },
        {
          customer_id: 37,
          tee_time_id: 331
        },
        {
          customer_id: 23,
          tee_time_id: 97
        },
        {
          customer_id: 245,
          tee_time_id: 477
        },
        {
          customer_id: 107,
          tee_time_id: 296
        },
        {
          customer_id: 132,
          tee_time_id: 98
        },
        {
          customer_id: 228,
          tee_time_id: 218
        },
        {
          customer_id: 239,
          tee_time_id: 482
        },
        {
          customer_id: 123,
          tee_time_id: 158
        },
        {
          customer_id: 206,
          tee_time_id: 476
        },
        {
          customer_id: 36,
          tee_time_id: 388
        },
        {
          customer_id: 64,
          tee_time_id: 73
        },
        {
          customer_id: 243,
          tee_time_id: 83
        },
        {
          customer_id: 226,
          tee_time_id: 6
        },
        {
          customer_id: 86,
          tee_time_id: 22
        },
        {
          customer_id: 291,
          tee_time_id: 376
        },
        {
          customer_id: 219,
          tee_time_id: 433
        },
        {
          customer_id: 272,
          tee_time_id: 384
        },
        {
          customer_id: 74,
          tee_time_id: 369
        },
        {
          customer_id: 101,
          tee_time_id: 302
        },
        {
          customer_id: 199,
          tee_time_id: 22
        },
        {
          customer_id: 23,
          tee_time_id: 350
        },
        {
          customer_id: 86,
          tee_time_id: 191
        },
        {
          customer_id: 225,
          tee_time_id: 2
        },
        {
          customer_id: 44,
          tee_time_id: 476
        },
        {
          customer_id: 48,
          tee_time_id: 22
        },
        {
          customer_id: 41,
          tee_time_id: 229
        },
        {
          customer_id: 263,
          tee_time_id: 157
        },
        {
          customer_id: 142,
          tee_time_id: 363
        },
        {
          customer_id: 213,
          tee_time_id: 278
        },
        {
          customer_id: 152,
          tee_time_id: 498
        },
        {
          customer_id: 154,
          tee_time_id: 452
        },
        {
          customer_id: 182,
          tee_time_id: 131
        },
        {
          customer_id: 117,
          tee_time_id: 196
        },
        {
          customer_id: 75,
          tee_time_id: 391
        },
        {
          customer_id: 248,
          tee_time_id: 106
        },
        {
          customer_id: 183,
          tee_time_id: 201
        },
        {
          customer_id: 237,
          tee_time_id: 141
        },
        {
          customer_id: 95,
          tee_time_id: 306
        },
        {
          customer_id: 70,
          tee_time_id: 76
        },
        {
          customer_id: 135,
          tee_time_id: 404
        },
        {
          customer_id: 230,
          tee_time_id: 492
        },
        {
          customer_id: 242,
          tee_time_id: 130
        },
        {
          customer_id: 137,
          tee_time_id: 172
        },
        {
          customer_id: 216,
          tee_time_id: 389
        },
        {
          customer_id: 54,
          tee_time_id: 226
        },
        {
          customer_id: 92,
          tee_time_id: 111
        },
        {
          customer_id: 223,
          tee_time_id: 286
        },
        {
          customer_id: 113,
          tee_time_id: 240
        },
        {
          customer_id: 46,
          tee_time_id: 378
        },
        {
          customer_id: 192,
          tee_time_id: 442
        },
        {
          customer_id: 60,
          tee_time_id: 350
        },
        {
          customer_id: 114,
          tee_time_id: 196
        },
        {
          customer_id: 83,
          tee_time_id: 125
        },
        {
          customer_id: 73,
          tee_time_id: 133
        },
        {
          customer_id: 63,
          tee_time_id: 473
        },
        {
          customer_id: 37,
          tee_time_id: 300
        },
        {
          customer_id: 147,
          tee_time_id: 206
        },
        {
          customer_id: 261,
          tee_time_id: 176
        },
        {
          customer_id: 240,
          tee_time_id: 278
        },
        {
          customer_id: 61,
          tee_time_id: 45
        },
        {
          customer_id: 234,
          tee_time_id: 189
        },
        {
          customer_id: 172,
          tee_time_id: 143
        },
        {
          customer_id: 120,
          tee_time_id: 394
        },
        {
          customer_id: 172,
          tee_time_id: 224
        },
        {
          customer_id: 275,
          tee_time_id: 16
        },
        {
          customer_id: 132,
          tee_time_id: 109
        },
        {
          customer_id: 26,
          tee_time_id: 478
        },
        {
          customer_id: 268,
          tee_time_id: 492
        },
        {
          customer_id: 3,
          tee_time_id: 429
        },
        {
          customer_id: 42,
          tee_time_id: 191
        },
        {
          customer_id: 203,
          tee_time_id: 444
        },
        {
          customer_id: 85,
          tee_time_id: 51
        },
        {
          customer_id: 183,
          tee_time_id: 28
        },
        {
          customer_id: 89,
          tee_time_id: 123
        },
        {
          customer_id: 34,
          tee_time_id: 314
        },
        {
          customer_id: 96,
          tee_time_id: 200
        },
        {
          customer_id: 51,
          tee_time_id: 150
        },
        {
          customer_id: 283,
          tee_time_id: 379
        },
        {
          customer_id: 293,
          tee_time_id: 278
        },
        {
          customer_id: 143,
          tee_time_id: 206
        },
        {
          customer_id: 198,
          tee_time_id: 106
        },
        {
          customer_id: 78,
          tee_time_id: 336
        },
        {
          customer_id: 4,
          tee_time_id: 64
        },
        {
          customer_id: 198,
          tee_time_id: 13
        },
        {
          customer_id: 207,
          tee_time_id: 355
        },
        {
          customer_id: 266,
          tee_time_id: 91
        },
        {
          customer_id: 139,
          tee_time_id: 4
        },
        {
          customer_id: 180,
          tee_time_id: 434
        },
        {
          customer_id: 23,
          tee_time_id: 370
        },
        {
          customer_id: 83,
          tee_time_id: 409
        },
        {
          customer_id: 216,
          tee_time_id: 289
        },
        {
          customer_id: 2,
          tee_time_id: 156
        },
        {
          customer_id: 282,
          tee_time_id: 288
        },
        {
          customer_id: 3,
          tee_time_id: 239
        },
        {
          customer_id: 101,
          tee_time_id: 421
        },
        {
          customer_id: 133,
          tee_time_id: 405
        },
        {
          customer_id: 216,
          tee_time_id: 112
        },
        {
          customer_id: 222,
          tee_time_id: 203
        },
        {
          customer_id: 71,
          tee_time_id: 99
        },
        {
          customer_id: 175,
          tee_time_id: 317
        },
        {
          customer_id: 85,
          tee_time_id: 31
        },
        {
          customer_id: 156,
          tee_time_id: 207
        },
        {
          customer_id: 95,
          tee_time_id: 240
        },
        {
          customer_id: 228,
          tee_time_id: 432
        },
        {
          customer_id: 84,
          tee_time_id: 195
        },
        {
          customer_id: 155,
          tee_time_id: 499
        },
        {
          customer_id: 95,
          tee_time_id: 13
        },
        {
          customer_id: 95,
          tee_time_id: 365
        },
        {
          customer_id: 259,
          tee_time_id: 429
        },
        {
          customer_id: 163,
          tee_time_id: 119
        },
        {
          customer_id: 92,
          tee_time_id: 387
        },
        {
          customer_id: 17,
          tee_time_id: 186
        },
        {
          customer_id: 84,
          tee_time_id: 189
        },
        {
          customer_id: 254,
          tee_time_id: 234
        },
        {
          customer_id: 170,
          tee_time_id: 345
        },
        {
          customer_id: 243,
          tee_time_id: 257
        },
        {
          customer_id: 53,
          tee_time_id: 365
        },
        {
          customer_id: 74,
          tee_time_id: 477
        },
        {
          customer_id: 141,
          tee_time_id: 222
        },
        {
          customer_id: 177,
          tee_time_id: 144
        },
        {
          customer_id: 45,
          tee_time_id: 50
        },
        {
          customer_id: 208,
          tee_time_id: 269
        },
        {
          customer_id: 152,
          tee_time_id: 269
        },
        {
          customer_id: 290,
          tee_time_id: 278
        },
        {
          customer_id: 10,
          tee_time_id: 481
        },
        {
          customer_id: 117,
          tee_time_id: 262
        },
        {
          customer_id: 231,
          tee_time_id: 254
        },
        {
          customer_id: 157,
          tee_time_id: 188
        },
        {
          customer_id: 275,
          tee_time_id: 238
        },
        {
          customer_id: 41,
          tee_time_id: 219
        },
        {
          customer_id: 83,
          tee_time_id: 499
        },
        {
          customer_id: 90,
          tee_time_id: 5
        },
        {
          customer_id: 287,
          tee_time_id: 154
        },
        {
          customer_id: 7,
          tee_time_id: 228
        },
        {
          customer_id: 133,
          tee_time_id: 460
        },
        {
          customer_id: 266,
          tee_time_id: 300
        },
        {
          customer_id: 53,
          tee_time_id: 479
        },
        {
          customer_id: 251,
          tee_time_id: 263
        },
        {
          customer_id: 36,
          tee_time_id: 371
        },
        {
          customer_id: 8,
          tee_time_id: 477
        },
        {
          customer_id: 65,
          tee_time_id: 459
        },
        {
          customer_id: 282,
          tee_time_id: 398
        },
        {
          customer_id: 295,
          tee_time_id: 223
        },
        {
          customer_id: 28,
          tee_time_id: 5
        },
        {
          customer_id: 287,
          tee_time_id: 450
        },
        {
          customer_id: 34,
          tee_time_id: 125
        },
        {
          customer_id: 241,
          tee_time_id: 454
        },
        {
          customer_id: 164,
          tee_time_id: 1
        },
        {
          customer_id: 222,
          tee_time_id: 315
        },
        {
          customer_id: 81,
          tee_time_id: 381
        },
        {
          customer_id: 14,
          tee_time_id: 1
        },
        {
          customer_id: 143,
          tee_time_id: 189
        },
        {
          customer_id: 276,
          tee_time_id: 53
        },
        {
          customer_id: 121,
          tee_time_id: 230
        },
        {
          customer_id: 245,
          tee_time_id: 351
        },
        {
          customer_id: 276,
          tee_time_id: 500
        },
        {
          customer_id: 69,
          tee_time_id: 205
        },
        {
          customer_id: 99,
          tee_time_id: 422
        },
        {
          customer_id: 244,
          tee_time_id: 417
        },
        {
          customer_id: 236,
          tee_time_id: 333
        },
        {
          customer_id: 27,
          tee_time_id: 254
        },
        {
          customer_id: 126,
          tee_time_id: 78
        },
        {
          customer_id: 102,
          tee_time_id: 254
        },
        {
          customer_id: 48,
          tee_time_id: 378
        },
        {
          customer_id: 80,
          tee_time_id: 27
        },
        {
          customer_id: 190,
          tee_time_id: 41
        },
        {
          customer_id: 165,
          tee_time_id: 102
        },
        {
          customer_id: 158,
          tee_time_id: 356
        },
        {
          customer_id: 281,
          tee_time_id: 149
        },
        {
          customer_id: 242,
          tee_time_id: 226
        },
        {
          customer_id: 292,
          tee_time_id: 340
        },
        {
          customer_id: 259,
          tee_time_id: 433
        },
        {
          customer_id: 279,
          tee_time_id: 42
        },
        {
          customer_id: 292,
          tee_time_id: 44
        },
        {
          customer_id: 297,
          tee_time_id: 402
        },
        {
          customer_id: 230,
          tee_time_id: 400
        },
        {
          customer_id: 226,
          tee_time_id: 115
        },
        {
          customer_id: 18,
          tee_time_id: 117
        },
        {
          customer_id: 267,
          tee_time_id: 219
        },
        {
          customer_id: 228,
          tee_time_id: 407
        },
        {
          customer_id: 249,
          tee_time_id: 432
        },
        {
          customer_id: 235,
          tee_time_id: 145
        },
        {
          customer_id: 73,
          tee_time_id: 51
        },
        {
          customer_id: 153,
          tee_time_id: 280
        },
        {
          customer_id: 299,
          tee_time_id: 237
        },
        {
          customer_id: 260,
          tee_time_id: 368
        },
        {
          customer_id: 155,
          tee_time_id: 62
        },
        {
          customer_id: 16,
          tee_time_id: 215
        },
        {
          customer_id: 17,
          tee_time_id: 373
        },
        {
          customer_id: 174,
          tee_time_id: 173
        },
        {
          customer_id: 85,
          tee_time_id: 239
        },
        {
          customer_id: 216,
          tee_time_id: 112
        },
        {
          customer_id: 280,
          tee_time_id: 480
        },
        {
          customer_id: 268,
          tee_time_id: 389
        },
        {
          customer_id: 56,
          tee_time_id: 370
        },
        {
          customer_id: 227,
          tee_time_id: 316
        },
        {
          customer_id: 10,
          tee_time_id: 417
        },
        {
          customer_id: 2,
          tee_time_id: 68
        },
        {
          customer_id: 153,
          tee_time_id: 352
        },
        {
          customer_id: 155,
          tee_time_id: 78
        },
        {
          customer_id: 26,
          tee_time_id: 450
        },
        {
          customer_id: 205,
          tee_time_id: 469
        },
        {
          customer_id: 6,
          tee_time_id: 72
        },
        {
          customer_id: 102,
          tee_time_id: 196
        },
        {
          customer_id: 249,
          tee_time_id: 157
        },
        {
          customer_id: 235,
          tee_time_id: 441
        },
        {
          customer_id: 246,
          tee_time_id: 414
        },
        {
          customer_id: 135,
          tee_time_id: 496
        },
        {
          customer_id: 225,
          tee_time_id: 255
        },
        {
          customer_id: 138,
          tee_time_id: 179
        },
        {
          customer_id: 84,
          tee_time_id: 54
        },
        {
          customer_id: 57,
          tee_time_id: 464
        },
        {
          customer_id: 229,
          tee_time_id: 12
        },
        {
          customer_id: 68,
          tee_time_id: 496
        },
        {
          customer_id: 76,
          tee_time_id: 402
        },
        {
          customer_id: 168,
          tee_time_id: 84
        },
        {
          customer_id: 47,
          tee_time_id: 152
        },
        {
          customer_id: 237,
          tee_time_id: 114
        },
        {
          customer_id: 231,
          tee_time_id: 129
        },
        {
          customer_id: 266,
          tee_time_id: 356
        },
        {
          customer_id: 291,
          tee_time_id: 289
        },
        {
          customer_id: 158,
          tee_time_id: 86
        },
        {
          customer_id: 283,
          tee_time_id: 427
        },
        {
          customer_id: 236,
          tee_time_id: 9
        },
        {
          customer_id: 196,
          tee_time_id: 271
        },
        {
          customer_id: 81,
          tee_time_id: 125
        },
        {
          customer_id: 269,
          tee_time_id: 38
        },
        {
          customer_id: 22,
          tee_time_id: 237
        },
        {
          customer_id: 189,
          tee_time_id: 386
        },
        {
          customer_id: 53,
          tee_time_id: 38
        },
        {
          customer_id: 2,
          tee_time_id: 81
        },
        {
          customer_id: 141,
          tee_time_id: 11
        },
        {
          customer_id: 154,
          tee_time_id: 34
        },
        {
          customer_id: 117,
          tee_time_id: 91
        },
        {
          customer_id: 107,
          tee_time_id: 467
        },
        {
          customer_id: 247,
          tee_time_id: 184
        },
        {
          customer_id: 91,
          tee_time_id: 410
        },
        {
          customer_id: 268,
          tee_time_id: 419
        },
        {
          customer_id: 108,
          tee_time_id: 145
        },
        {
          customer_id: 273,
          tee_time_id: 52
        },
        {
          customer_id: 90,
          tee_time_id: 433
        },
        {
          customer_id: 251,
          tee_time_id: 112
        },
        {
          customer_id: 190,
          tee_time_id: 224
        },
        {
          customer_id: 233,
          tee_time_id: 237
        },
        {
          customer_id: 119,
          tee_time_id: 410
        },
        {
          customer_id: 154,
          tee_time_id: 47
        },
        {
          customer_id: 194,
          tee_time_id: 203
        },
        {
          customer_id: 51,
          tee_time_id: 410
        },
        {
          customer_id: 47,
          tee_time_id: 196
        },
        {
          customer_id: 199,
          tee_time_id: 79
        },
        {
          customer_id: 49,
          tee_time_id: 259
        },
        {
          customer_id: 152,
          tee_time_id: 202
        },
        {
          customer_id: 227,
          tee_time_id: 17
        },
        {
          customer_id: 217,
          tee_time_id: 279
        },
        {
          customer_id: 269,
          tee_time_id: 288
        },
        {
          customer_id: 266,
          tee_time_id: 107
        },
        {
          customer_id: 147,
          tee_time_id: 27
        },
        {
          customer_id: 161,
          tee_time_id: 351
        },
        {
          customer_id: 165,
          tee_time_id: 120
        },
        {
          customer_id: 48,
          tee_time_id: 92
        },
        {
          customer_id: 275,
          tee_time_id: 438
        },
        {
          customer_id: 178,
          tee_time_id: 313
        },
        {
          customer_id: 64,
          tee_time_id: 226
        },
        {
          customer_id: 149,
          tee_time_id: 265
        },
        {
          customer_id: 98,
          tee_time_id: 374
        },
        {
          customer_id: 38,
          tee_time_id: 123
        },
        {
          customer_id: 250,
          tee_time_id: 349
        },
        {
          customer_id: 29,
          tee_time_id: 209
        },
        {
          customer_id: 54,
          tee_time_id: 54
        },
        {
          customer_id: 9,
          tee_time_id: 500
        },
        {
          customer_id: 130,
          tee_time_id: 63
        },
        {
          customer_id: 221,
          tee_time_id: 87
        },
        {
          customer_id: 273,
          tee_time_id: 127
        },
        {
          customer_id: 195,
          tee_time_id: 339
        },
        {
          customer_id: 161,
          tee_time_id: 119
        },
        {
          customer_id: 295,
          tee_time_id: 458
        },
        {
          customer_id: 172,
          tee_time_id: 394
        },
        {
          customer_id: 274,
          tee_time_id: 447
        },
        {
          customer_id: 33,
          tee_time_id: 254
        },
        {
          customer_id: 184,
          tee_time_id: 357
        },
        {
          customer_id: 144,
          tee_time_id: 491
        },
        {
          customer_id: 274,
          tee_time_id: 47
        },
        {
          customer_id: 46,
          tee_time_id: 494
        },
        {
          customer_id: 155,
          tee_time_id: 454
        },
        {
          customer_id: 182,
          tee_time_id: 9
        },
        {
          customer_id: 160,
          tee_time_id: 215
        },
        {
          customer_id: 262,
          tee_time_id: 191
        },
        {
          customer_id: 271,
          tee_time_id: 158
        },
        {
          customer_id: 275,
          tee_time_id: 100
        },
        {
          customer_id: 181,
          tee_time_id: 299
        },
        {
          customer_id: 194,
          tee_time_id: 430
        },
        {
          customer_id: 116,
          tee_time_id: 410
        },
        {
          customer_id: 77,
          tee_time_id: 145
        },
        {
          customer_id: 204,
          tee_time_id: 274
        },
        {
          customer_id: 194,
          tee_time_id: 135
        },
        {
          customer_id: 4,
          tee_time_id: 8
        },
        {
          customer_id: 98,
          tee_time_id: 70
        },
        {
          customer_id: 58,
          tee_time_id: 395
        },
        {
          customer_id: 97,
          tee_time_id: 5
        },
        {
          customer_id: 89,
          tee_time_id: 162
        },
        {
          customer_id: 209,
          tee_time_id: 242
        },
        {
          customer_id: 91,
          tee_time_id: 268
        },
        {
          customer_id: 217,
          tee_time_id: 317
        },
        {
          customer_id: 3,
          tee_time_id: 92
        },
        {
          customer_id: 267,
          tee_time_id: 352
        },
        {
          customer_id: 180,
          tee_time_id: 348
        },
        {
          customer_id: 290,
          tee_time_id: 198
        },
        {
          customer_id: 154,
          tee_time_id: 284
        },
        {
          customer_id: 96,
          tee_time_id: 331
        },
        {
          customer_id: 151,
          tee_time_id: 332
        },
        {
          customer_id: 119,
          tee_time_id: 150
        },
        {
          customer_id: 226,
          tee_time_id: 139
        },
        {
          customer_id: 298,
          tee_time_id: 353
        },
        {
          customer_id: 279,
          tee_time_id: 309
        },
        {
          customer_id: 32,
          tee_time_id: 227
        },
        {
          customer_id: 62,
          tee_time_id: 375
        },
        {
          customer_id: 169,
          tee_time_id: 494
        },
        {
          customer_id: 282,
          tee_time_id: 166
        },
        {
          customer_id: 146,
          tee_time_id: 469
        },
        {
          customer_id: 93,
          tee_time_id: 298
        },
        {
          customer_id: 287,
          tee_time_id: 497
        },
        {
          customer_id: 275,
          tee_time_id: 18
        },
        {
          customer_id: 48,
          tee_time_id: 409
        },
        {
          customer_id: 281,
          tee_time_id: 113
        },
        {
          customer_id: 191,
          tee_time_id: 338
        },
        {
          customer_id: 239,
          tee_time_id: 155
        },
        {
          customer_id: 175,
          tee_time_id: 167
        },
        {
          customer_id: 244,
          tee_time_id: 285
        },
        {
          customer_id: 8,
          tee_time_id: 160
        },
        {
          customer_id: 219,
          tee_time_id: 327
        },
        {
          customer_id: 172,
          tee_time_id: 270
        },
        {
          customer_id: 43,
          tee_time_id: 488
        },
        {
          customer_id: 214,
          tee_time_id: 320
        },
        {
          customer_id: 123,
          tee_time_id: 368
        },
        {
          customer_id: 97,
          tee_time_id: 405
        },
        {
          customer_id: 229,
          tee_time_id: 202
        },
        {
          customer_id: 71,
          tee_time_id: 468
        },
        {
          customer_id: 143,
          tee_time_id: 22
        },
        {
          customer_id: 99,
          tee_time_id: 237
        },
        {
          customer_id: 250,
          tee_time_id: 298
        },
        {
          customer_id: 79,
          tee_time_id: 76
        },
        {
          customer_id: 119,
          tee_time_id: 264
        },
        {
          customer_id: 167,
          tee_time_id: 209
        },
        {
          customer_id: 269,
          tee_time_id: 375
        },
        {
          customer_id: 30,
          tee_time_id: 470
        },
        {
          customer_id: 106,
          tee_time_id: 414
        },
        {
          customer_id: 227,
          tee_time_id: 100
        },
        {
          customer_id: 268,
          tee_time_id: 261
        },
        {
          customer_id: 125,
          tee_time_id: 285
        },
        {
          customer_id: 69,
          tee_time_id: 187
        },
        {
          customer_id: 53,
          tee_time_id: 372
        },
        {
          customer_id: 162,
          tee_time_id: 14
        },
        {
          customer_id: 212,
          tee_time_id: 148
        },
        {
          customer_id: 123,
          tee_time_id: 51
        },
        {
          customer_id: 261,
          tee_time_id: 138
        },
        {
          customer_id: 22,
          tee_time_id: 161
        },
        {
          customer_id: 223,
          tee_time_id: 141
        },
        {
          customer_id: 75,
          tee_time_id: 175
        },
        {
          customer_id: 186,
          tee_time_id: 117
        },
        {
          customer_id: 256,
          tee_time_id: 355
        },
        {
          customer_id: 281,
          tee_time_id: 107
        },
        {
          customer_id: 267,
          tee_time_id: 236
        },
        {
          customer_id: 266,
          tee_time_id: 207
        },
        {
          customer_id: 159,
          tee_time_id: 67
        },
        {
          customer_id: 36,
          tee_time_id: 458
        },
        {
          customer_id: 79,
          tee_time_id: 349
        },
        {
          customer_id: 83,
          tee_time_id: 493
        },
        {
          customer_id: 184,
          tee_time_id: 470
        },
        {
          customer_id: 225,
          tee_time_id: 209
        },
        {
          customer_id: 210,
          tee_time_id: 108
        },
        {
          customer_id: 297,
          tee_time_id: 131
        },
        {
          customer_id: 164,
          tee_time_id: 15
        },
        {
          customer_id: 75,
          tee_time_id: 257
        },
        {
          customer_id: 112,
          tee_time_id: 399
        },
        {
          customer_id: 33,
          tee_time_id: 412
        },
        {
          customer_id: 147,
          tee_time_id: 302
        },
        {
          customer_id: 62,
          tee_time_id: 188
        },
        {
          customer_id: 33,
          tee_time_id: 291
        },
        {
          customer_id: 76,
          tee_time_id: 340
        },
        {
          customer_id: 175,
          tee_time_id: 321
        },
        {
          customer_id: 173,
          tee_time_id: 177
        },
        {
          customer_id: 112,
          tee_time_id: 48
        },
        {
          customer_id: 20,
          tee_time_id: 362
        },
        {
          customer_id: 61,
          tee_time_id: 267
        },
        {
          customer_id: 113,
          tee_time_id: 250
        },
        {
          customer_id: 168,
          tee_time_id: 28
        },
        {
          customer_id: 97,
          tee_time_id: 134
        },
        {
          customer_id: 293,
          tee_time_id: 101
        },
        {
          customer_id: 226,
          tee_time_id: 377
        },
        {
          customer_id: 95,
          tee_time_id: 279
        },
        {
          customer_id: 49,
          tee_time_id: 286
        },
        {
          customer_id: 221,
          tee_time_id: 304
        },
        {
          customer_id: 94,
          tee_time_id: 58
        },
        {
          customer_id: 222,
          tee_time_id: 181
        },
        {
          customer_id: 118,
          tee_time_id: 108
        },
        {
          customer_id: 278,
          tee_time_id: 95
        },
        {
          customer_id: 220,
          tee_time_id: 165
        },
        {
          customer_id: 26,
          tee_time_id: 496
        },
        {
          customer_id: 185,
          tee_time_id: 458
        },
        {
          customer_id: 31,
          tee_time_id: 305
        },
        {
          customer_id: 272,
          tee_time_id: 34
        },
        {
          customer_id: 191,
          tee_time_id: 114
        },
        {
          customer_id: 31,
          tee_time_id: 141
        },
        {
          customer_id: 252,
          tee_time_id: 308
        },
        {
          customer_id: 243,
          tee_time_id: 110
        },
        {
          customer_id: 63,
          tee_time_id: 25
        },
        {
          customer_id: 184,
          tee_time_id: 243
        },
        {
          customer_id: 44,
          tee_time_id: 467
        },
        {
          customer_id: 232,
          tee_time_id: 473
        },
        {
          customer_id: 113,
          tee_time_id: 442
        },
        {
          customer_id: 277,
          tee_time_id: 168
        },
        {
          customer_id: 230,
          tee_time_id: 149
        },
        {
          customer_id: 84,
          tee_time_id: 327
        },
        {
          customer_id: 149,
          tee_time_id: 163
        },
        {
          customer_id: 112,
          tee_time_id: 272
        },
        {
          customer_id: 228,
          tee_time_id: 38
        },
        {
          customer_id: 169,
          tee_time_id: 495
        },
        {
          customer_id: 256,
          tee_time_id: 26
        },
        {
          customer_id: 4,
          tee_time_id: 10
        },
        {
          customer_id: 249,
          tee_time_id: 450
        },
        {
          customer_id: 241,
          tee_time_id: 67
        },
        {
          customer_id: 102,
          tee_time_id: 33
        },
        {
          customer_id: 113,
          tee_time_id: 350
        },
        {
          customer_id: 32,
          tee_time_id: 110
        },
        {
          customer_id: 203,
          tee_time_id: 302
        },
        {
          customer_id: 184,
          tee_time_id: 197
        },
        {
          customer_id: 237,
          tee_time_id: 43
        },
        {
          customer_id: 151,
          tee_time_id: 386
        },
        {
          customer_id: 196,
          tee_time_id: 425
        },
        {
          customer_id: 17,
          tee_time_id: 424
        },
        {
          customer_id: 239,
          tee_time_id: 275
        },
        {
          customer_id: 284,
          tee_time_id: 132
        },
        {
          customer_id: 195,
          tee_time_id: 179
        },
        {
          customer_id: 170,
          tee_time_id: 109
        },
        {
          customer_id: 287,
          tee_time_id: 110
        },
        {
          customer_id: 90,
          tee_time_id: 106
        },
        {
          customer_id: 96,
          tee_time_id: 406
        },
        {
          customer_id: 159,
          tee_time_id: 224
        },
        {
          customer_id: 107,
          tee_time_id: 64
        },
        {
          customer_id: 293,
          tee_time_id: 63
        },
        {
          customer_id: 194,
          tee_time_id: 417
        },
        {
          customer_id: 80,
          tee_time_id: 498
        },
        {
          customer_id: 45,
          tee_time_id: 84
        },
        {
          customer_id: 105,
          tee_time_id: 93
        },
        {
          customer_id: 187,
          tee_time_id: 89
        },
        {
          customer_id: 202,
          tee_time_id: 256
        },
        {
          customer_id: 295,
          tee_time_id: 314
        },
        {
          customer_id: 16,
          tee_time_id: 476
        },
        {
          customer_id: 173,
          tee_time_id: 237
        },
        {
          customer_id: 72,
          tee_time_id: 257
        },
        {
          customer_id: 280,
          tee_time_id: 210
        },
        {
          customer_id: 167,
          tee_time_id: 480
        },
        {
          customer_id: 117,
          tee_time_id: 337
        },
        {
          customer_id: 264,
          tee_time_id: 484
        },
        {
          customer_id: 107,
          tee_time_id: 64
        },
        {
          customer_id: 289,
          tee_time_id: 243
        },
        {
          customer_id: 241,
          tee_time_id: 405
        },
        {
          customer_id: 190,
          tee_time_id: 195
        },
        {
          customer_id: 131,
          tee_time_id: 286
        },
        {
          customer_id: 28,
          tee_time_id: 161
        },
        {
          customer_id: 225,
          tee_time_id: 455
        },
        {
          customer_id: 118,
          tee_time_id: 83
        },
        {
          customer_id: 214,
          tee_time_id: 372
        },
        {
          customer_id: 75,
          tee_time_id: 39
        },
        {
          customer_id: 135,
          tee_time_id: 22
        },
        {
          customer_id: 209,
          tee_time_id: 409
        },
        {
          customer_id: 94,
          tee_time_id: 381
        },
        {
          customer_id: 93,
          tee_time_id: 14
        },
        {
          customer_id: 285,
          tee_time_id: 210
        },
        {
          customer_id: 92,
          tee_time_id: 127
        },
        {
          customer_id: 215,
          tee_time_id: 50
        },
        {
          customer_id: 278,
          tee_time_id: 302
        },
        {
          customer_id: 55,
          tee_time_id: 279
        },
        {
          customer_id: 218,
          tee_time_id: 266
        },
        {
          customer_id: 124,
          tee_time_id: 428
        },
        {
          customer_id: 231,
          tee_time_id: 441
        },
        {
          customer_id: 62,
          tee_time_id: 206
        },
        {
          customer_id: 61,
          tee_time_id: 129
        },
        {
          customer_id: 3,
          tee_time_id: 78
        },
        {
          customer_id: 116,
          tee_time_id: 451
        },
        {
          customer_id: 169,
          tee_time_id: 207
        },
        {
          customer_id: 188,
          tee_time_id: 250
        },
        {
          customer_id: 247,
          tee_time_id: 404
        },
        {
          customer_id: 48,
          tee_time_id: 330
        },
        {
          customer_id: 215,
          tee_time_id: 384
        },
        {
          customer_id: 172,
          tee_time_id: 266
        },
        {
          customer_id: 273,
          tee_time_id: 443
        },
        {
          customer_id: 65,
          tee_time_id: 67
        },
        {
          customer_id: 63,
          tee_time_id: 5
        },
        {
          customer_id: 100,
          tee_time_id: 261
        },
        {
          customer_id: 184,
          tee_time_id: 436
        },
        {
          customer_id: 152,
          tee_time_id: 454
        },
        {
          customer_id: 244,
          tee_time_id: 295
        },
        {
          customer_id: 166,
          tee_time_id: 162
        },
        {
          customer_id: 265,
          tee_time_id: 10
        },
        {
          customer_id: 126,
          tee_time_id: 423
        },
        {
          customer_id: 142,
          tee_time_id: 430
        },
        {
          customer_id: 298,
          tee_time_id: 278
        },
        {
          customer_id: 29,
          tee_time_id: 3
        },
        {
          customer_id: 166,
          tee_time_id: 97
        },
        {
          customer_id: 192,
          tee_time_id: 50
        },
        {
          customer_id: 91,
          tee_time_id: 195
        },
        {
          customer_id: 168,
          tee_time_id: 365
        },
        {
          customer_id: 19,
          tee_time_id: 95
        },
        {
          customer_id: 111,
          tee_time_id: 174
        },
        {
          customer_id: 160,
          tee_time_id: 70
        },
        {
          customer_id: 47,
          tee_time_id: 131
        },
        {
          customer_id: 266,
          tee_time_id: 430
        },
        {
          customer_id: 60,
          tee_time_id: 413
        },
        {
          customer_id: 111,
          tee_time_id: 154
        },
        {
          customer_id: 238,
          tee_time_id: 99
        },
        {
          customer_id: 75,
          tee_time_id: 14
        },
        {
          customer_id: 257,
          tee_time_id: 226
        },
        {
          customer_id: 277,
          tee_time_id: 167
        },
        {
          customer_id: 113,
          tee_time_id: 95
        },
        {
          customer_id: 124,
          tee_time_id: 407
        },
        {
          customer_id: 104,
          tee_time_id: 240
        },
        {
          customer_id: 49,
          tee_time_id: 115
        },
        {
          customer_id: 176,
          tee_time_id: 496
        },
        {
          customer_id: 135,
          tee_time_id: 398
        },
        {
          customer_id: 247,
          tee_time_id: 169
        },
        {
          customer_id: 228,
          tee_time_id: 117
        },
        {
          customer_id: 100,
          tee_time_id: 27
        },
        {
          customer_id: 244,
          tee_time_id: 487
        },
        {
          customer_id: 277,
          tee_time_id: 41
        },
        {
          customer_id: 10,
          tee_time_id: 462
        },
        {
          customer_id: 86,
          tee_time_id: 403
        },
        {
          customer_id: 135,
          tee_time_id: 126
        },
        {
          customer_id: 52,
          tee_time_id: 428
        },
        {
          customer_id: 102,
          tee_time_id: 121
        },
        {
          customer_id: 284,
          tee_time_id: 375
        },
        {
          customer_id: 14,
          tee_time_id: 56
        },
        {
          customer_id: 152,
          tee_time_id: 15
        },
        {
          customer_id: 123,
          tee_time_id: 271
        },
        {
          customer_id: 107,
          tee_time_id: 105
        },
        {
          customer_id: 254,
          tee_time_id: 87
        },
        {
          customer_id: 254,
          tee_time_id: 238
        },
        {
          customer_id: 84,
          tee_time_id: 384
        },
        {
          customer_id: 34,
          tee_time_id: 141
        },
        {
          customer_id: 169,
          tee_time_id: 41
        },
        {
          customer_id: 232,
          tee_time_id: 146
        },
        {
          customer_id: 103,
          tee_time_id: 204
        },
        {
          customer_id: 141,
          tee_time_id: 393
        },
        {
          customer_id: 3,
          tee_time_id: 231
        },
        {
          customer_id: 236,
          tee_time_id: 439
        },
        {
          customer_id: 90,
          tee_time_id: 88
        },
        {
          customer_id: 174,
          tee_time_id: 104
        },
        {
          customer_id: 289,
          tee_time_id: 474
        },
        {
          customer_id: 173,
          tee_time_id: 432
        },
        {
          customer_id: 85,
          tee_time_id: 281
        },
        {
          customer_id: 102,
          tee_time_id: 182
        },
        {
          customer_id: 19,
          tee_time_id: 193
        },
        {
          customer_id: 44,
          tee_time_id: 261
        },
        {
          customer_id: 37,
          tee_time_id: 154
        },
        {
          customer_id: 211,
          tee_time_id: 237
        },
        {
          customer_id: 259,
          tee_time_id: 454
        },
        {
          customer_id: 184,
          tee_time_id: 210
        },
        {
          customer_id: 118,
          tee_time_id: 34
        },
        {
          customer_id: 92,
          tee_time_id: 125
        },
        {
          customer_id: 108,
          tee_time_id: 336
        },
        {
          customer_id: 41,
          tee_time_id: 461
        },
        {
          customer_id: 141,
          tee_time_id: 61
        },
        {
          customer_id: 151,
          tee_time_id: 13
        },
        {
          customer_id: 19,
          tee_time_id: 105
        },
        {
          customer_id: 199,
          tee_time_id: 149
        },
        {
          customer_id: 141,
          tee_time_id: 396
        },
        {
          customer_id: 66,
          tee_time_id: 430
        },
        {
          customer_id: 214,
          tee_time_id: 230
        },
        {
          customer_id: 291,
          tee_time_id: 295
        },
        {
          customer_id: 67,
          tee_time_id: 393
        },
        {
          customer_id: 124,
          tee_time_id: 313
        },
        {
          customer_id: 39,
          tee_time_id: 475
        },
        {
          customer_id: 1,
          tee_time_id: 480
        },
        {
          customer_id: 212,
          tee_time_id: 105
        },
        {
          customer_id: 226,
          tee_time_id: 77
        },
        {
          customer_id: 299,
          tee_time_id: 58
        },
        {
          customer_id: 203,
          tee_time_id: 4
        },
        {
          customer_id: 159,
          tee_time_id: 276
        },
        {
          customer_id: 181,
          tee_time_id: 88
        },
        {
          customer_id: 58,
          tee_time_id: 80
        },
        {
          customer_id: 85,
          tee_time_id: 273
        },
        {
          customer_id: 246,
          tee_time_id: 392
        },
        {
          customer_id: 30,
          tee_time_id: 118
        },
        {
          customer_id: 92,
          tee_time_id: 189
        },
        {
          customer_id: 223,
          tee_time_id: 355
        },
        {
          customer_id: 143,
          tee_time_id: 268
        },
        {
          customer_id: 31,
          tee_time_id: 56
        },
        {
          customer_id: 75,
          tee_time_id: 271
        },
        {
          customer_id: 117,
          tee_time_id: 149
        },
        {
          customer_id: 161,
          tee_time_id: 291
        },
        {
          customer_id: 135,
          tee_time_id: 246
        },
        {
          customer_id: 188,
          tee_time_id: 26
        },
        {
          customer_id: 159,
          tee_time_id: 225
        },
        {
          customer_id: 174,
          tee_time_id: 6
        },
        {
          customer_id: 188,
          tee_time_id: 153
        },
        {
          customer_id: 95,
          tee_time_id: 151
        },
        {
          customer_id: 147,
          tee_time_id: 249
        },
        {
          customer_id: 116,
          tee_time_id: 350
        },
        {
          customer_id: 47,
          tee_time_id: 255
        },
        {
          customer_id: 274,
          tee_time_id: 392
        },
        {
          customer_id: 72,
          tee_time_id: 326
        },
        {
          customer_id: 159,
          tee_time_id: 65
        },
        {
          customer_id: 276,
          tee_time_id: 319
        },
        {
          customer_id: 91,
          tee_time_id: 77
        },
        {
          customer_id: 83,
          tee_time_id: 243
        },
        {
          customer_id: 241,
          tee_time_id: 216
        },
        {
          customer_id: 186,
          tee_time_id: 323
        },
        {
          customer_id: 105,
          tee_time_id: 467
        },
        {
          customer_id: 46,
          tee_time_id: 125
        },
        {
          customer_id: 161,
          tee_time_id: 210
        },
        {
          customer_id: 274,
          tee_time_id: 69
        },
        {
          customer_id: 164,
          tee_time_id: 251
        },
        {
          customer_id: 285,
          tee_time_id: 286
        },
        {
          customer_id: 122,
          tee_time_id: 97
        },
        {
          customer_id: 16,
          tee_time_id: 314
        },
        {
          customer_id: 27,
          tee_time_id: 30
        },
        {
          customer_id: 65,
          tee_time_id: 465
        },
        {
          customer_id: 202,
          tee_time_id: 24
        },
        {
          customer_id: 264,
          tee_time_id: 200
        },
        {
          customer_id: 148,
          tee_time_id: 11
        },
        {
          customer_id: 245,
          tee_time_id: 435
        },
        {
          customer_id: 25,
          tee_time_id: 108
        },
        {
          customer_id: 154,
          tee_time_id: 195
        },
        {
          customer_id: 184,
          tee_time_id: 434
        },
        {
          customer_id: 294,
          tee_time_id: 262
        },
        {
          customer_id: 32,
          tee_time_id: 22
        },
        {
          customer_id: 134,
          tee_time_id: 226
        },
        {
          customer_id: 27,
          tee_time_id: 248
        },
        {
          customer_id: 182,
          tee_time_id: 286
        },
        {
          customer_id: 66,
          tee_time_id: 232
        },
        {
          customer_id: 184,
          tee_time_id: 327
        },
        {
          customer_id: 17,
          tee_time_id: 365
        },
        {
          customer_id: 286,
          tee_time_id: 429
        },
        {
          customer_id: 23,
          tee_time_id: 51
        },
        {
          customer_id: 63,
          tee_time_id: 398
        },
        {
          customer_id: 225,
          tee_time_id: 239
        },
        {
          customer_id: 195,
          tee_time_id: 110
        },
        {
          customer_id: 127,
          tee_time_id: 488
        },
        {
          customer_id: 170,
          tee_time_id: 165
        },
        {
          customer_id: 197,
          tee_time_id: 7
        },
        {
          customer_id: 280,
          tee_time_id: 455
        },
        {
          customer_id: 33,
          tee_time_id: 413
        },
        {
          customer_id: 47,
          tee_time_id: 236
        },
        {
          customer_id: 109,
          tee_time_id: 412
        },
        {
          customer_id: 42,
          tee_time_id: 143
        },
        {
          customer_id: 103,
          tee_time_id: 97
        },
        {
          customer_id: 6,
          tee_time_id: 292
        },
        {
          customer_id: 97,
          tee_time_id: 414
        },
        {
          customer_id: 222,
          tee_time_id: 385
        },
        {
          customer_id: 218,
          tee_time_id: 408
        },
        {
          customer_id: 161,
          tee_time_id: 141
        },
        {
          customer_id: 174,
          tee_time_id: 415
        },
        {
          customer_id: 300,
          tee_time_id: 145
        },
        {
          customer_id: 36,
          tee_time_id: 323
        },
        {
          customer_id: 288,
          tee_time_id: 77
        },
        {
          customer_id: 67,
          tee_time_id: 320
        },
        {
          customer_id: 8,
          tee_time_id: 405
        }
      ]);
    });
};
